jQuery(document).ready(function(e){var t=e("meta[name=csrf_token]").attr("content");e("#register__step_one");var s=e("#register__step_two"),a=e("#register__step_three"),r=e("#register__step_four"),i=e("#register__step_five"),d=e("#bar__one"),n=e("#bar__two"),l=e("#bar__three"),c=e("#bar__four"),v=e("#register-password"),u=e("#register-password-confirm"),o=e(".password-error"),p=e(".c-password-error");e("#step-btn-1").on("click",function(){var t=e("#register-username").val(),a=e("#register-email").val();""==t?e(".username-error").html('<div class="text-danger">OPS!  Username is required!</div>'):t.trim().length<=5&&(e(".username-error").empty(),e(".username-error").html('<div class="text-danger">Please enter at least 6 charecter!</div>')),""==a?e(".email-error").html('<div class="text-danger">OPS!  Email is required!</div>'):function(e){return new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(e)}(a)||(e(".email-error").empty(),e(".email-error").html('<div class="text-danger">Please enter valid email address!</div>')),""==v.val()&&o.html('<div class="text-danger">OPS!  Password is required!</div>'),""==u.val()&&p.html('<div class="text-danger">OPS! Confirm Password is required!</div>'),v.val()!=u.val()?p.html('<div class="text-danger">OPS! Confirm Password does not match!</div>'):""!=t&&""!=a&&""!=v.val()&&""!=u.val()&&(o.empty(),e(".username-error").empty(),e(".email-error").empty(),p.empty(),e(".step-1").removeClass("active-step"),e(".step-2").addClass("active-step"),d.addClass("step__bar_complete"),n.addClass("step__bar_active"),s.addClass("step__active"))}),v.on("keyup",function(t){var s=e(this).val();s.length>=6?""!=s?o.empty():o.html('<div class="text-danger">OPS!  Password is required!</div>'):(o.empty(),o.html('<div class="text-danger">OPS!  Password must be 6 charecter!</div>'))}),u.on("keyup",function(t){var s=e(this).val();s.length>=6?""!=s?(o.empty(),v.val()!=s?p.html('<div class="text-danger">OPS! Confirm Password does not match!</div>'):p.empty()):p.html('<div class="text-danger">OPS! Confirm Password is required!</div>'):(p.empty(),p.html('<div class="text-danger">OPS! Confirm Password must be 6 charecter!</div>'))});var m=e("#register-gender"),F=e("#register-preference"),_=e(".gender-error"),x=e(".preference-error");m.on("change",function(t){""==e(this).val()?_.html('<div class="text-danger">OPS!  Gender is required!</div>'):_.empty()}),F.on("change",function(t){""==e(this).val()?x.html('<div class="text-danger">OPS! Perference is required!</div>'):x.empty()});var h=e("#register-day"),f=e("#register-month"),C=e("#register-year"),g=e(".date-error");h.on("change",function(t){""==e(this).val()?g.html('<div class="text-danger">OPS! All field is required!</div>'):g.empty()}),f.on("change",function(t){""==e(this).val()?g.html('<div class="text-danger">OPS! All field is required!</div>'):g.empty()}),C.on("change",function(t){""==e(this).val()?g.html('<div class="text-danger">OPS! All field is required!</div>'):g.empty()});var y=e("#register-address"),b=e("#register-country"),P=e(".address-error"),D=e(".country-error");y.on("keyup",function(t){""==e(this).val()?P.html('<div class="text-danger">OPS! Address field is required!</div>'):P.empty()}),b.on("change",function(t){""==e(this).val()?D.html('<div class="text-danger">OPS! Country is required!</div>'):D.empty()}),e("#step-btn-2").on("click",function(){""==m.val()&&_.html('<div class="text-danger">OPS!  Gender is required!</div>'),""==F.val()&&x.html('<div class="text-danger">OPS! Perference is required!</div>'),""!=F.val()&&""!=m.val()&&(_.empty(),x.empty(),e(".step-5").removeClass("active-step")),""!=h.val()&&""!=f.val()&&""!=C.val()?g.empty():g.html('<div class="text-danger">OPS! All field is required!</div>'),""==y.val()&&P.html('<div class="text-danger">OPS! Address field is required!</div>'),""==b.val()&&D.html('<div class="text-danger">OPS! Country is required!</div>'),""!=F.val()&&""!=m.val()&&""!=b.val()&&""!=y.val()&&""!=h.val()&&""!=f.val()&&""!=C.val()&&(P.empty(),D.empty(),e(".step-2").removeClass("active-step"),e(".step-3").addClass("active-step"),n.addClass("step__bar_complete"),l.addClass("step__bar_active"),a.addClass("step__active"))}),e("#step-back-1").on("click",function(){e(".step-1").addClass("active-step"),e(".step-2").removeClass("active-step"),d.removeClass("step__bar_complete"),n.removeClass("step__bar_active"),s.removeClass("step__active")}),e("#step-back-2").on("click",function(){e(".step-2").addClass("active-step"),e(".step-3").removeClass("active-step"),n.removeClass("step__bar_complete"),l.removeClass("step__bar_active"),a.removeClass("step__active")}),e("#step-back-3").on("click",function(){e(".step-3").addClass("active-step"),e(".step-4").removeClass("active-step"),l.removeClass("step__bar_complete"),c.removeClass("step__bar_active"),r.removeClass("step__active")}),e("#step-back-4").on("click",function(){e(".step-4").addClass("active-step"),e(".step-5").removeClass("active-step"),c.removeClass("step__bar_complete"),bar__five.removeClass("step__bar_active"),i.removeClass("step__active")});var O=[],S=e(".selected__interest"),k=e("#register-interests-input"),q=e("#search_interest"),A=e(".search_interest_available"),E=e(".loader"),w=e(".interest-error");q.on("keyup",function(s){var a=e(this).val();E.empty(),w.empty(),A.empty(),""!=a?(A.empty(),e.ajax({url:ajax_url,beforeSend:function(){e('<div class="lds-ellipsis" style="height: 40px; margin-top: -20px;"></div>').html("<div></div><div></div><div></div><div></div>").appendTo(E),A.empty()},data:{action:"search_interest",search:a,_token:t},dataType:"JSON",type:"POST",success:function(s){if(A.empty(),e.isEmptyObject(s.data)&&e('<div class="text-center text-danger"></div>').html("Interest not found!").appendTo(A),"success"===s.status){var a=s.data.filter(function(e){return!O.some(function(t){return e.id===t.id})});e.map(a,function(t){e('<div class="interest__item" data-id="'+t.id+'"></div>').html('<i class="'+t.icon+'"></i>                                    <span>'+t.text+"</span>").appendTo(A)})}setTimeout(()=>{e(document).off("click").on("click",".interest__item",function(){var s=e(this).data("id");e.ajax({url:ajax_url,data:{action:"interest_by_id",id:s,_token:t},dataType:"JSON",type:"POST",context:this,success:function(t){"success"===t.status&&(e(this).remove(),w.empty(),O.push(t.data)),setTimeout(()=>{var t=O;if(O.filter(function(e){return t.findIndex(t=>t.id==e.id)<=-1&&t.push(e),null}),!e.isEmptyObject(t)){S.empty();var s=[];e.map(t,function(t){s.push(t.id),e('<div class="interest__item_selected"></div>').html('<i data-id="'+t.id+'" class="cross__interest_btn fa fa-times"></i><i class="'+t.icon+'"></i>                                                        <span>'+t.text+"</span>").appendTo(S)}),k.val(s.join(",")),e(".cross__interest_btn").click(function(){k.val("");var t=e(this).data("id");if(t){var s=O.find(e=>e.id===t),a=O.indexOf(s);O.splice(a,1),e(this).parent().remove();var r=O.map(e=>e.id);k.val(r.join(",")),e('<div class="interest__item" data-id="'+s.id+'"></div>').html('<i class="'+s.icon+'"></i>                                                            <span>'+s.text+"</span>").appendTo(A)}})}},50)}})})},100)},complete:function(){E.empty()}})):(E.empty(),A.empty())}),e("#step-btn-3").on("click",function(){""!=k.val()?(e(".step-3").removeClass("active-step"),e(".step-4").addClass("active-step"),l.addClass("step__bar_complete"),r.addClass("step__active")):w.html('<div class="text-danger">OPS! Interest is required!</div>')}),e("#step-btn-4").on("click",function(){e(".step-4").removeClass("active-step"),e(".step-5").addClass("active-step"),c.addClass("step__bar_complete"),i.addClass("step__active")})});