$(document).ready(function(){
	/*============================================
	Page Preloader
	==============================================*/
	

	/*============================================
	Navigation Functions
	==============================================*/
	if ($(window).scrollTop()< 10){
		$('#main-nav').removeClass('scrolled');
	}
	else{
		$('#main-nav').addClass('scrolled');    
	}

	$(window).scroll(function(){
		if ($(window).scrollTop()< 10){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');    
		}
	});
	
	$('a.scrollto').click(function(e){
		e.preventDefault();
		var target =$(this).attr('href');
		$('html, body').stop().animate({scrollTop: $(target).offset().top}, 1600, 'easeInOutExpo',
			function(){window.location.hash =target;});
			
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});
	
	/*============================================
	Tabs
	==============================================*/	
	
	$('.toggle-tabs').click(function(e){
		e.preventDefault()
		
		if($(this).is('.active')){return;}
		$(this).tab('show');
		
		$(this).siblings('.toggle-tabs').removeClass('active');
		$(this).addClass('active');
	})
	
	$('.toggle-tabs').on('shown.bs.tab', function (e) {
	  $('.tab-content').addClass('fadeOut');
	  
	  setTimeout(function(){
		$('.tab-content').removeClass('fadeOut');
	  },200)
	})
	
	/*============================================
	Skills
	==============================================*/	
	$('#skills').waypoint(function(){
		$('.chart').each(function(){
		$(this).easyPieChart({
				size:200,
				animate: 2000,
				lineCap:'butt',
				scaleColor: false,
				trackColor: 'transparent',
				barColor: $('.main-color').css('color'),
				lineWidth: 5,
				easing:'easeOutQuad'
			});
		});
	},{offset:'80%'});
	/*============================================
	Filter Projects
	==============================================*/
	
	$('.project-count').each(function(){
	
		var filter = $(this).parent('.btn').attr('data-filter');
		$(this).text($('.project-item'+filter).length);
	
	});
	
	$('#filter-works .btn').click(function(e){
		e.preventDefault();
		
		$('#filter-works .btn').removeClass('active');
		$(this).addClass('active');

		var category = $(this).attr('data-filter');

		$('.project-item').addClass('filtered');
		$('.project-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
		});
			
		$('#projects-container').addClass('anim-out');
			
		setTimeout(function(){
			$('.project-item').show();
			$('.project-item.filtered').hide();
			$('#projects-container').removeClass('anim-out');
		},450);
		
		scrollSpyRefresh();
		waypointsRefresh();
	});
	
	/*============================================
	Project Viewer
	==============================================*/
	
	$('#project-viewer').addClass('add-slider');
	
	$('.project-item').click(function(e){
	
		e.preventDefault();
		
		loadProject($(this));
	
		$('#project-viewer').modal({backdrop:false});
		
	})
	
	/*Prevent Navbar movement*/
	$('#project-viewer').on('show.bs.modal',function(){
		$('#main-nav').width($('#main-nav').width());
		
	});
	
	$('#project-viewer').on('hidden.bs.modal',function(){
		$('#main-nav').width('auto');
	});
	
	
	/*Projects navigation*/
	$('.project-nav .next-project').click(function(){
		var $newProject = $('.project-item.active').next('.project-item');
		$('#project-viewer .container').fadeOut(500,function(){loadProject($newProject);});
	});
	
	$('.project-nav .previous-project').click(function(){
		var $newProject = $('.project-item.active').prev('.project-item');
		$('#project-viewer .container').fadeOut(500,function(){loadProject($newProject);});
	});
	
	function loadProject($project){
	
		$('.project-item').removeClass('active');
		$project.addClass('active');
		
		var projectLink = $project.attr('href').replace(/[#?]/g, '');
		
		window.location.hash = '?'+projectLink;
		
		$('#project-viewer-content').load(projectLink,function(){
			$('#project-viewer .container').fadeIn(500);
			afterLoadFn();
		});
		
	}
	
	function afterLoadFn(){
	
		$('#project-viewer').scrollTop(0);
		
		/*Show-Hide Nav butttons*/
		if($('.project-item.active').index()==0){$('#project-viewer .previous-project').addClass('hidden');}
		else{$('#project-viewer .previous-project').removeClass('hidden');}
	
		if($('.project-item.active').index()== ($('.project-item').length -1)){$('#project-viewer .next-project').addClass('hidden');}
		else{$('#project-viewer .next-project').removeClass('hidden');}

		//$('.project-slider').flexslider({
		//	animation:'slide',
		//	slideshowSpeed: 4000,
		//	useCSS: true,
		//	directionNav: false, 
		//	pauseOnAction: false, 
		//	pauseOnHover: true,
		//	smoothHeight: false
		//});

		//$('.video-container').fitVids();
	}
	
	/*Close project Modal*/
	
	$('#project-viewer').on('hidden.bs.modal',function(){
		$('#project-viewer-content').empty();
		$('#project-viewer .container').fadeOut();
	});
	
	$('#project-viewer').on('hide.bs.modal',function(){
		window.location.hash = 'portfolio';
	});
	
	/*Open project by url*/
	var reg = /^[#]+[?]/;

	if(reg.test(window.location.hash)){
		var $project = $('.project-item[href="'+window.location.hash+'"]');
		$project.trigger('click');
	}
	


	
	/*============================================
	Placeholder Detection
	==============================================*/
	if (!Modernizr.input.placeholder) {
		$('#contact-form').addClass('no-placeholder');
	}
	
	/*============================================
	Tooltips
	==============================================*/
	$("[data-toggle='tooltip']").tooltip({container: 'body'});
	
	/*============================================
	Waypoints Animations
	==============================================*/
	$(window).load(function(){
		
		$('.scrollimation').waypoint(function(){
			$(this).addClass('in');
		},{offset:'95%'});
		
	});
	
	/*============================================
	Refresh scrollSpy function
	==============================================*/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
	}
	
	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}
});



var wow = new WOW({
  boxClass:     'wow',      // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset:       0,          // distance to the element when triggering the animation (default is 0)
  mobile:       false,       // trigger animations on mobile devices (default is true)
  live:         true,       // act on asynchronously loaded content (default is true)
  callback:     function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  }
});
$('#contact-form .form-control').each(function(){

	if($.trim($(this).val()) == ''){
		$(this).removeClass('input-filled');
	}else{
		$(this).addClass('input-filled');
	}
});
$('#contact-form2 .form-control').each(function(){

	if($.trim($(this).val()) == ''){
		$(this).removeClass('input-filled');
	}else{
		$(this).addClass('input-filled');
	}
});
$('#contact-form2 .form-control').on('blur',function(){

	if($.trim($(this).val()) == ''){
		$(this).removeClass('input-filled');
	}else{
		$(this).addClass('input-filled');
	}
});

$('#contact-form .form-control').on('blur',function(){

	if($.trim($(this).val()) == ''){
		$(this).removeClass('input-filled');
	}else{
		$(this).addClass('input-filled');
	}
});
jQuery(".txtScroll-top").slide({titCell:".hd ol",mainCell:".bd ol",autoPage:true,effect:"topLoop",autoPlay:true,easing:"easeOutCirc",delayTime:1000});
window.onscroll = function () {

	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t > 500) {
		$("#phone").addClass("shadow");


	} else {
		$("#phone").removeClass("shadow");


	}
};









wow.init();
$(function () {
	$('[data-toggle="popover"]').popover()
});
/*============================================
 Project Viewer
 ==============================================*/

$('#project-viewer2').addClass('add-slider');

$('.project-item2').click(function(e){

	e.preventDefault();

	loadProject($(this));

	$('#project-viewer2').modal({backdrop:false});

})

/*Prevent Navbar movement*/
$('#project-viewer2').on('show.bs.modal',function(){
	$('#main-nav2').width($('#main-nav2').width());

});

$('#project-viewer2').on('hidden.bs.modal',function(){
	$('#main-nav2').width('auto');
});


/*Projects navigation*/


function loadProject($project){

	$('.project-item2').removeClass('active');
	$project.addClass('active');

	var projectLink2 = $project.attr('href').replace(/[#?]/g, '');

	window.location.hash = '?' + projectLink2;

	$('#project-viewer-content2').load(projectLink2, function () {
		$('#project-viewer2 .container').fadeIn(500);
		afterLoadFn();
	});

}

function afterLoadFn(){

	$('#project-viewer').scrollTop(0);

	/*Show-Hide Nav butttons*/
	if($('.project-item2.active').index()==0){$('#project-viewer2 .previous-project').addClass('hidden');}
	else{$('#project-viewer2 .previous-project').addClass('hidden');}

	if($('.project-item2.active').index()== ($('.project-item2').length -1)){$('#project-viewer2 .next-project').addClass('hidden');}
	else{$('#project-viewer2 .next-project').addClass('hidden');}

	//$('.project-slider').flexslider({
	//	animation:'slide',
	//	slideshowSpeed: 4000,
	//	useCSS: true,
	//	directionNav: false,
	//	pauseOnAction: false,
	//	pauseOnHover: true,
	//	smoothHeight: false
	//});

	//$('.video-container').fitVids();
}

/*Close project Modal*/

$('#project-viewer2').on('hidden.bs.modal',function(){
	$('#project-viewer-content2').empty();
	$('#project-viewer2 .container').fadeOut();
});

$('#project-viewer2').on('hide.bs.modal',function(){
	window.location.hash = 'portfolio';
});

/*Open project by url*/
var reg = /^[#]+[?]/;

if(reg.test(window.location.hash)){
	var $project = $('.project-item2[href="'+window.location.hash+'"]');
	$project.trigger('click');
}



