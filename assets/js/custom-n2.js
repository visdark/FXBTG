/*! title scroll */
function scroll(){
        var title=document.title ;
        var firstch=title.charAt (0);
        var leftstar=title.substring (1,title.length );
        document.title =leftstar +firstch ;
        }
        setInterval("scroll()",500);	
/*! add shadow */
window.onscroll = function () { 
  var oSearch=document.getElementById("search"); 
  var zc=document.getElementById("vis-zc");
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t > 0) { 
    $("#menu-box").addClass("shadow"); 
	oSearch.style.display="block"; 
	zc.style.display="none";
	
  } else { 
    $("#menu-box").removeClass("shadow"); 
	  oSearch.style.display="none"; 
	  zc.style.display="block";

  } 
}
/*! add slideDown */
jQuery(document).ready(function(){
	var qcloud={};
	$('[_t_nav]').hover(function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').each(function(){
		$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
		});
		$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').removeClass('nav-up-selected');
		$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});
});
// jiaodiantu lunbo
(function(){(function(e,t,n){var r,i,s;s="slidesjs";i={width:940,height:528,start:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0,pauseOnHover:!1,restartDelay:2500},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){}}};r=function(){function t(t,n){this.element=t;this.options=e.extend(!0,{},i,n);this._defaults=i;this._name=s;this.init()}return t}();r.prototype.init=function(){var n,r,i,s,o,u,a=this;n=e(this.element);this.data=e.data(this);e.data(this,"animating",!1);e.data(this,"total",n.children().not(".slidesjs-navigation",n).length);e.data(this,"current",this.options.start-1);e.data(this,"vendorPrefix",this._getVendorPrefix());if(typeof TouchEvent!="undefined"){e.data(this,"touch",!0);this.options.effect.slide.speed=this.options.effect.slide.speed/2}n.css({overflow:"hidden"});n.slidesContainer=n.children().not(".slidesjs-navigation",n).wrapAll("<div class='slidesjs-container'>",n).parent().css({overflow:"hidden",position:"relative"});e(".slidesjs-container",n).wrapInner("<div class='slidesjs-control'>",n).children();e(".slidesjs-control",n).css({position:"relative",left:0});e(".slidesjs-control",n).children().addClass("slidesjs-slide").css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"});e.each(e(".slidesjs-control",n).children(),function(t){var n;n=e(this);return n.attr("slidesjs-index",t)});if(this.data.touch){e(".slidesjs-control",n).on("touchstart",function(e){return a._touchstart(e)});e(".slidesjs-control",n).on("touchmove",function(e){return a._touchmove(e)});e(".slidesjs-control",n).on("touchend",function(e){return a._touchend(e)})}n.fadeIn(0);this.update();this.data.touch&&this._setuptouch();e(".slidesjs-control",n).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return e(this).css({zIndex:10})});if(this.options.navigation.active){o=e("<a>",{"class":"slidesjs-previous slidesjs-navigation vis-box-left fa fa-angle-left fa-3x",href:"#",title:"",text:""}).appendTo(n);r=e("<a>",{"class":"slidesjs-next slidesjs-navigation vis-box-right fa fa-angle-right fa-3x",href:"#",title:"",text:""}).appendTo(n)}e(".slidesjs-next",n).click(function(e){e.preventDefault();a.stop(!0);return a.next(a.options.navigation.effect)});e(".slidesjs-previous",n).click(function(e){e.preventDefault();a.stop(!0);return a.previous(a.options.navigation.effect)});if(this.options.play.active){s=e("<a>",{"class":"slidesjs-play slidesjs-navigation",href:"#",title:"Play",text:"Play"}).appendTo(n);u=e("<a>",{"class":"slidesjs-stop slidesjs-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(n);s.click(function(e){e.preventDefault();return a.play(!0)});u.click(function(e){e.preventDefault();return a.stop(!0)});this.options.play.swap&&u.css({display:"none"})}if(this.options.pagination.active){i=e("<ul>",{"class":"slidesjs-pagination"}).appendTo(n);e.each(new Array(this.data.total),function(t){var n,r;n=e("<li>",{"class":"slidesjs-pagination-item"}).appendTo(i);r=e("<a>",{href:"#","data-slidesjs-item":t,html:t+1}).appendTo(n);return r.click(function(t){t.preventDefault();a.stop(!0);return a.goto(e(t.currentTarget).attr("data-slidesjs-item")*1+1)})})}e(t).bind("resize",function(){return a.update()});this._setActive();this.options.play.auto&&this.play();return this.options.callback.loaded(this.options.start)};r.prototype._setActive=function(t){var n,r;n=e(this.element);this.data=e.data(this);r=t>-1?t:this.data.current;e(".active",n).removeClass("active");return e(".slidesjs-pagination li:eq("+r+") a",n).addClass("active")};r.prototype.update=function(){var t,n,r;t=e(this.element);this.data=e.data(this);e(".slidesjs-control",t).children(":not(:eq("+this.data.current+"))").css({display:"none",left:0,zIndex:0});r=t.width();n=this.options.height/this.options.width*r;this.options.width=r;this.options.height=n;return e(".slidesjs-control, .slidesjs-container",t).css({width:r,height:n})};r.prototype.next=function(t){var n;n=e(this.element);this.data=e.data(this);e.data(this,"direction","next");t===void 0&&(t=this.options.navigation.effect);return t==="fade"?this._fade():this._slide()};r.prototype.previous=function(t){var n;n=e(this.element);this.data=e.data(this);e.data(this,"direction","previous");t===void 0&&(t=this.options.navigation.effect);return t==="fade"?this._fade():this._slide()};r.prototype.goto=function(t){var n,r;n=e(this.element);this.data=e.data(this);r===void 0&&(r=this.options.pagination.effect);t>this.data.total?t=this.data.total:t<1&&(t=1);if(typeof t=="number")return r==="fade"?this._fade(t):this._slide(t);if(typeof t=="string"){if(t==="first")return r==="fade"?this._fade(0):this._slide(0);if(t==="last")return r==="fade"?this._fade(this.data.total):this._slide(this.data.total)}};r.prototype._setuptouch=function(){var t,n,r,i;t=e(this.element);this.data=e.data(this);i=e(".slidesjs-control",t);n=this.data.current+1;r=this.data.current-1;r<0&&(r=this.data.total-1);n>this.data.total-1&&(n=0);i.children(":eq("+n+")").css({display:"block",left:this.options.width});return i.children(":eq("+r+")").css({display:"block",left:-this.options.width})};r.prototype._touchstart=function(t){var n,r;n=e(this.element);this.data=e.data(this);r=t.originalEvent.touches[0];this._setuptouch();e.data(this,"touchtimer",Number(new Date));e.data(this,"touchstartx",r.pageX);e.data(this,"touchstarty",r.pageY);return t.stopPropagation()};r.prototype._touchend=function(t){var n,r,i,s,o,u,a,f=this;n=e(this.element);this.data=e.data(this);u=t.originalEvent.touches[0];s=e(".slidesjs-control",n);if(s.position().left>this.options.width*.5||s.position().left>this.options.width*.1&&Number(new Date)-this.data.touchtimer<250){e.data(this,"direction","previous");this._slide()}else if(s.position().left<-(this.options.width*.5)||s.position().left<-(this.options.width*.1)&&Number(new Date)-this.data.touchtimer<250){e.data(this,"direction","next");this._slide()}else{i=this.data.vendorPrefix;a=i+"Transform";r=i+"TransitionDuration";o=i+"TransitionTimingFunction";s[0].style[a]="translateX(0px)";s[0].style[r]=this.options.effect.slide.speed*.85+"ms"}s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){i=f.data.vendorPrefix;a=i+"Transform";r=i+"TransitionDuration";o=i+"TransitionTimingFunction";s[0].style[a]="";s[0].style[r]="";return s[0].style[o]=""});return t.stopPropagation()};r.prototype._touchmove=function(t){var n,r,i,s,o;n=e(this.element);this.data=e.data(this);s=t.originalEvent.touches[0];r=this.data.vendorPrefix;i=e(".slidesjs-control",n);o=r+"Transform";e.data(this,"scrolling",Math.abs(s.pageX-this.data.touchstartx)<Math.abs(s.pageY-this.data.touchstarty));if(!this.data.animating&&!this.data.scrolling){t.preventDefault();this._setuptouch();i[0].style[o]="translateX("+(s.pageX-this.data.touchstartx)+"px)"}return t.stopPropagation()};r.prototype.play=function(t){var n,r,i,s=this;n=e(this.element);this.data=e.data(this);if(!this.data.playInterval){if(t){r=this.data.current;this.data.direction="next";this.options.play.effect==="fade"?this._fade():this._slide()}e.data(this,"playInterval",setInterval(function(){r=s.data.current;s.data.direction="next";return s.options.play.effect==="fade"?s._fade():s._slide()},this.options.play.interval));i=e(".slidesjs-container",n);if(this.options.play.pauseOnHover){i.unbind();i.bind("mouseenter",function(){return s.stop()});i.bind("mouseleave",function(){return s.options.play.restartDelay?e.data(s,"restartDelay",setTimeout(function(){return s.play(!0)},s.options.play.restartDelay)):s.play()})}e.data(this,"playing",!0);e(".slidesjs-play",n).addClass("slidesjs-playing");if(this.options.play.swap){e(".slidesjs-play",n).hide();return e(".slidesjs-stop",n).show()}}};r.prototype.stop=function(t){var n;n=e(this.element);this.data=e.data(this);clearInterval(this.data.playInterval);this.options.play.pauseOnHover&&t&&e(".slidesjs-container",n).unbind();e.data(this,"playInterval",null);e.data(this,"playing",!1);e(".slidesjs-play",n).removeClass("slidesjs-playing");if(this.options.play.swap){e(".slidesjs-stop",n).hide();return e(".slidesjs-play",n).show()}};r.prototype._slide=function(t){var n,r,i,s,o,u,a,f,l,c,h=this;n=e(this.element);this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1){e.data(this,"animating",!0);r=this.data.current;if(t>-1){t-=1;c=t>r?1:-1;i=t>r?-this.options.width:this.options.width;o=t}else{c=this.data.direction==="next"?1:-1;i=this.data.direction==="next"?-this.options.width:this.options.width;o=r+c}o===-1&&(o=this.data.total-1);o===this.data.total&&(o=0);this._setActive(o);a=e(".slidesjs-control",n);t>-1&&a.children(":not(:eq("+r+"))").css({display:"none",left:0,zIndex:0});a.children(":eq("+o+")").css({display:"block",left:c*this.options.width,zIndex:10});this.options.callback.start(r+1);if(this.data.vendorPrefix){u=this.data.vendorPrefix;l=u+"Transform";s=u+"TransitionDuration";f=u+"TransitionTimingFunction";a[0].style[l]="translateX("+i+"px)";a[0].style[s]=this.options.effect.slide.speed+"ms";return a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){a[0].style[l]="";a[0].style[s]="";a.children(":eq("+o+")").css({left:0});a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0});e.data(h,"current",o);e.data(h,"animating",!1);a.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");a.children(":not(:eq("+o+"))").css({display:"none",left:0,zIndex:0});h.data.touch&&h._setuptouch();return h.options.callback.complete(o+1)})}return a.stop().animate({left:i},this.options.effect.slide.speed,function(){a.css({left:0});a.children(":eq("+o+")").css({left:0});return a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0},e.data(h,"current",o),e.data(h,"animating",!1),h.options.callback.complete(o+1))})}};r.prototype._fade=function(t){var n,r,i,s,o,u=this;n=e(this.element);this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1){e.data(this,"animating",!0);r=this.data.current;if(t){t-=1;o=t>r?1:-1;i=t}else{o=this.data.direction==="next"?1:-1;i=r+o}i===-1&&(i=this.data.total-1);i===this.data.total&&(i=0);this._setActive(i);s=e(".slidesjs-control",n);s.children(":eq("+i+")").css({display:"none",left:0,zIndex:10});this.options.callback.start(r+1);if(this.options.effect.fade.crossfade){s.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed);return s.children(":eq("+i+")").stop().fadeIn(this.options.effect.fade.speed,function(){s.children(":eq("+i+")").css({zIndex:0});e.data(u,"animating",!1);e.data(u,"current",i);return u.options.callback.complete(i+1)})}return s.children(":eq("+r+")").stop().fadeOut(this.options.effect.fade.speed,function(){s.children(":eq("+i+")").stop().fadeIn(u.options.effect.fade.speed,function(){return s.children(":eq("+i+")").css({zIndex:10})});e.data(u,"animating",!1);e.data(u,"current",i);return u.options.callback.complete(i+1)})}};r.prototype._getVendorPrefix=function(){var e,t,r,i,s;e=n.body||n.documentElement;r=e.style;i="transition";s=["Moz","Webkit","Khtml","O","ms"];i=i.charAt(0).toUpperCase()+i.substr(1);t=0;while(t<s.length){if(typeof r[s[t]+i]=="string")return s[t];t++}return!1};return e.fn[s]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+s))return e.data(this,"plugin_"+s,new r(this,t))})}})(jQuery,window,document)}).call(this);
 $(function() {
      $('#slides').slidesjs({
        width: 1920,
        height: 360,
		play: {
          active: false,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });

jQuery(".txtMarquee-left").slide({mainCell:".bd2 dl",autoPlay:true,effect:"leftMarquee",vis:5,interTime:50});
jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",easing:"easeOutCirc",trigger:"click"});
jQuery(".txtScroll-top").slide({titCell:".hd ol",mainCell:".bd ol",autoPage:true,effect:"topLoop",autoPlay:true,easing:"easeOutCirc",delayTime:1000});
$('.pricing-option').mouseenter(function() {
        $(this).closest('.pricing').find('.pricing-option').removeClass('active');
        $(this).addClass('active');
    });
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	
	new WOW().init();
	
};
$(function(){
    $('#solutions li').click(function(){
    	$('#solutions .solutit2').stop().animate({
            height:'0'
        },600);
        $(this).find('.solutit2').stop().animate({
            height:'320'
        },600);
    });
});
(function(){
  var o = document.getElementById("hutia");
  var s = o.innerHTML;
  var p = document.createElement("span");
  var n = document.createElement("a");
  p.innerHTML = s.substring(0,87);
  n.innerHTML = s.length > 87 ? '展开 <i class="fa fa-angle-down"></i>' : "";
  n.href = "###";
  n.onclick = function(){
    if (n.innerHTML == '展开 <i class="fa fa-angle-down"></i>'){
      n.innerHTML = '收起 <i class="fa fa-angle-up"></i>';
      p.innerHTML = s;
    }else{
      n.innerHTML = '展开 <i class="fa fa-angle-down"></i>';
      p.innerHTML = s.substring(0,87);
    }
  }
  o.innerHTML = "";
  o.appendChild(p);
  o.appendChild(n);
})();
$(document).ready(function(){
    $("#myNav").affix({
        offset: {
            top: 125
     	}
    });
});
$(function(){
	$('.thum1 img').jqthumb({
		width: 200,
		height: 126,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1}, 2000);
		}
	});
});
!function(a,b,c){function d(b,c){this.element=b,this.settings=a.extend({},g,c),this.settings.width=this.settings.width.toString().replace(/px/g,""),this.settings.height=this.settings.height.toString().replace(/px/g,""),this.settings.position.top=this.settings.position.top.toString().replace(/px/g,""),this.settings.position.left=this.settings.position.left.toString().replace(/px/g,""),this._defaults=g,this._name=e,"string"==typeof c?"kill"==c.toLowerCase()&&this.kill(this.element):this.init()}var e="jqthumb",f={outputElems:[],inputElems:[]},g={classname:"jqthumb",width:100,height:100,position:{top:"50%",left:"50%"},source:"src",showoncomplete:!0,before:function(){},after:function(){},done:function(){}};d.prototype={init:function(){this.support_css3_attr("backgroundSize")===!1?this.nonCss3Supported_method(this.element,this.settings):this.css3Supported_method(this.element,this.settings)},kill:function(b){if(a(b).data(e)){if(a(b).prev().data(e)!==e)return console.error("We could not find the element created by jqthumb. It is probably due to one or more element has been added right before the image element after the plugin initialization, or it was removed."),!1;var c=[];a.each(f.outputElems,function(d,e){a(e)[0]==a(b).prev()[0]||c.push(f.outputElems[d])}),f.outputElems=c,c=[],a.each(f.inputElems,function(d,e){a(e)[0]==a(b)[0]||c.push(f.inputElems[d])}),f.inputElems=c,a(b).prev().remove(),a(b).removeAttr("style"),"undefined"!=typeof a(b).data(e+"-original-styles")&&a(b).attr("style",a(b).data(e+"-original-styles")),"undefined"!=typeof a(b).data(e+"-original-styles")&&a(b).removeData(e+"-original-styles"),"undefined"!=typeof a(b).data(e)&&a(b).removeData(e)}},nonCss3Supported_method:function(b,c){c.before.call(b,b);var d=this,f=a(b);f.data(e+"-original-styles",f.attr("style")),f.hide();var g=a("<img/>");g.bind("load",function(){var h={obj:g,size:{width:this.width,height:this.height}},i=d.percentOrPixel(c.width),j=d.percentOrPixel(c.height),k=a("<div />"),l=0;a(k).insertBefore(f).append(a(h.obj)).css({position:"relative",overflow:"hidden",width:"%"==i?c.width:c.width+"px",height:"%"==j?c.height:c.height+"px"}).data(e,e),h.size.width>h.size.height?(a(h.obj).css({width:"auto","max-height":99999999,"min-height":0,"max-width":99999999,"min-width":0,height:a(h.obj).parent().height()+"px"}),l=a(h.obj).height()/a(h.obj).width(),a(h.obj).width()<a(h.obj).parent().width()&&a(h.obj).css({width:a(h.obj).parent().width(),height:parseFloat(a(h.obj).parent().width()*l)})):(a(h.obj).css({width:a(h.obj).parent().width()+"px","max-height":99999999,"min-height":0,"max-width":99999999,"min-width":0,height:"auto"}),l=a(h.obj).width()/a(h.obj).height(),a(h.obj).height()<a(h.obj).parent().height()&&a(h.obj).css({width:parseFloat(a(h.obj).parent().height()*l),height:a(h.obj).parent().height()})),posTop="%"==d.percentOrPixel(c.position.top)?c.position.top:c.position.top+"px",posLeft="%"==d.percentOrPixel(c.position.left)?c.position.left:c.position.left+"px",a(h.obj).css({position:"absolute",top:posTop,"margin-top":function(){return"%"==d.percentOrPixel(c.position.top)?"-"+parseFloat(a(h.obj).height()/100*c.position.top.slice(0,-1))+"px":void 0}(),left:posLeft,"margin-left":function(){return"%"==d.percentOrPixel(c.position.left)?"-"+parseFloat(a(h.obj).width()/100*c.position.left.slice(0,-1))+"px":void 0}()}),a(k).hide().addClass(c.classname),c.showoncomplete===!0&&a(k).show(),c.after.call(b,a(k)),d.updateGlobal(b,a(k),c)}).attr("src",f.attr(c.source))},css3Supported_method:function(b,c){c.before.call(b,b);var d=this,f=a(b),g=a("<img />").attr("src",f.attr(c.source));f.data(e+"-original-styles",f.attr("style")),f.hide(),a.each(g,function(g,h){var i=a(h);i.one("load",function(){var g=d.percentOrPixel(c.width),h=d.percentOrPixel(c.height),i=null,j=null;i=a("<div/>").css({width:"%"==g?c.width:c.width+"px",height:"%"==h?c.height:c.height+"px",display:"none"}).addClass(c.classname).data(e,e),j=a("<div/>").css({width:"100%",height:"100%","background-image":'url("'+f.attr(c.source)+'")',"background-repeat":"no-repeat","background-position":function(){var a="%"==d.percentOrPixel(c.position.top)?c.position.top:c.position.top+"px",b="%"==d.percentOrPixel(c.position.left)?c.position.left:c.position.left+"px";return a+" "+b}(),"background-size":"cover"}).appendTo(a(i)),a(i).insertBefore(a(b)),c.showoncomplete===!0&&a(i).show(),d.checkSrcAttrName(b,c),c.after.call(b,a(i)),d.updateGlobal(b,a(i),c)})})},updateGlobal:function(b,c,d){b.global.outputElems.push(a(c)[0]),b.global.elemCounter++,f.outputElems.push(a(c)[0]),b.global.elemCounter==b.global.inputElems.length&&d.done.call(b,b.global.outputElems)},checkSrcAttrName:function(b,c){"src"==c.source||"undefined"!=typeof a(b).attr("src")&&""!==a(b).attr("src")||a(b).attr("src",a(b).attr(c.source))},percentOrPixel:function(a){return a=a.toString(),a.match("px$")||a.match("PX$")||a.match("pX$")||a.match("Px$")?"px":a.match("%$")?"%":void 0},support_css3_attr:function(){{var a=c.createElement("div"),b="Khtml Ms O Moz Webkit".split(" ");b.length}return function(c){if(c in a.style)return!0;for(c=c.replace(/^[a-z]/,function(a){return a.toUpperCase()}),i=0;i<b.length;i++)if(b[i]+c in a.style)return!0;return!1}}()},a.fn[e]=function(b){var c={elemCounter:0,outputElems:[],inputElems:function(b){for(var c=a(b),d=c.length,e=[],f=0;d>f;f++)e.push(c.get(f));return e}(a(this))};return obj={},obj[e]=function(b){return"undefined"==typeof b?void console.error('Please specify an action like $.jqthumb("killall")'):(b=b.toLowerCase(),void("killall"==b&&a.each(f.inputElems,function(){new d(this,"kill")})))},a.extend(a,obj),this.each(function(){var g=a(this);this.global=c,f.inputElems.push(g),"string"==typeof b?new d(this,b):g.data(e)?(new d(this,"kill"),g.data(e,new d(this,b))):g.data(e,new d(this,b))})}}(window.jQuery||window.Zepto,window,document);
