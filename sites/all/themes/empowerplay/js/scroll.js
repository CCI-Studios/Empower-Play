
(function($) {
	

	$(function()
	{
		init();	


	$('.fc-event').click(function(){

		var cboxOptions =
		 {
		  
		  maxWidth: '620px',
		  maxHeight: '380px',
		}
		console.log('clicked');

			$('.cbox-link').colorbox(cboxOptions);

			$(window).resize(function(){
			    $.colorbox.resize({
			      width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
			      height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
			    });
			});
		
	});

	});

	function init()
	{
		var t = $("#black-region").offset().top;
		$(document).scroll(function()
		{
		    if($(this).scrollTop() > t)
		    {   
		    	$('body').addClass('arrow-animate-1');
		    }

		     if($(this).scrollTop() > t+200)
		    {   
		    	$('body').addClass('arrow-animate-2');
		    }

		    if($(this).scrollTop() > t+500)
		    {   
		    	$('body').addClass('arrow-animate-3');
		    }

		    if($(this).scrollTop() > t+800)
		    {   
		    	$('body').addClass('arrow-animate-4');
		    }
		});
	}


}(jQuery));