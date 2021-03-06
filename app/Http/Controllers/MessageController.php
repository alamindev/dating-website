<?php

namespace App\Http\Controllers;

use App\Conversation;
use App\Message;
use App\Photo;
use App\User;
use App\VideoCall;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Twilio\Jwt\AccessToken;
use Twilio\Jwt\Grants\VideoGrant;

class MessageController extends Controller
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function messages()
    {
        $conversations = Conversation::with('sender','receive')->where('sender_id', auth()->id())->orWhere(function(Builder  $query){
            $query->where('receive_id', auth()->id())->whereNotNull('last_message');
        })->orderBy('updated_at','DESC')->get()->take(10);
        return view('messages.all', compact('conversations'));
    }

    public function message($id)
    {
        $conversation = Conversation::with('messages', 'sender','receive')->where('id', $id)->where(function(Builder $query){
            $query->where('sender_id', auth()->id())->orWhere('receive_id', auth()->id());
        })->first();
        if($conversation) {
            $conversations = Conversation::where('sender_id', auth()->id())->orWhere(function (Builder $query) {
                $query->where('receive_id', auth()->id())->whereNotNull('last_message');
            })->orderBy('updated_at', 'DESC')->get()->take(10);
            return view('messages.all', compact('conversations', 'conversation'));
        }
        return redirect()->route('messages');

    }

    public function startChat($id)
    {
        $conversation = Conversation::where(function(Builder $query) use ($id){
            $query->where('sender_id', $id)->where('receive_id', auth()->id());
        })->orWhere(function(Builder $query) use ($id) {
            $query->where('sender_id', auth()->id())->where('receive_id', $id);
        })->first();
        if(!$conversation){
            $conversation = new Conversation();
            $conversation->sender_id = auth()->id();
            $conversation->receive_id = $id;
            $conversation->updated_at = date('Y-m-d H:i:s');
            $conversation->save();
        }
        else{
            $conversation->last_message = '';
            $conversation->save();
        }
        return redirect()->route('message',['id'=>$conversation->id]);
    }

    public function upload()
    {
        if($this->request->id && $this->request->hasFile('file') && auth()->check()){
            $conversation = Conversation::where('id', $this->request->id)->first();
            $file = $this->request->file('file');
            if($conversation && in_array($file->getClientOriginalExtension(), ['jpg','jpeg','png','gif'])){
                $fulldestPath = create_folder(auth()->user()->id);
                $random = Str::random('20').time();
                $name = $random.'.'.$file->getClientOriginalExtension();
                $thumb = $random.'_thumb.'.$file->getClientOriginalExtension();
                $file->move(realpath($fulldestPath),$name);
                $image = Image::make(realpath($fulldestPath).'/'.$name);

                $image->resize(250, 250, function ($constraint){
                    $constraint->aspectRatio();
                    $constraint->upsize();
                });
                $height = $image->getHeight();
                $image->save(realpath($fulldestPath).'/'.$thumb);
                $this->request->text = '<img height="'.$height.'" class="view-chat-photo" data-view="'.url('uploads/photos/'.auth()->user()->id.'/'.$name).'" src="'.url('uploads/photos/'.auth()->user()->id.'/'.$thumb).'">';
                $ajax = new AjaxController($this->request);
                return $ajax->send_message();
            }
        }
        return response()->json(['status'=>'error']);
    }

    public function delete_message($id)
    {
        $conversation = Conversation::where('id', $id)->where(function(Builder $builder) {
            $builder->where('sender_id', auth()->id())->orWhere('receive_id', auth()->id());
        })->first();

        if($conversation){
            Message::where('conversation_id', $id)->delete();
            $conversation->delete();
        }
        return redirect()->route('messages');
    } 
}
