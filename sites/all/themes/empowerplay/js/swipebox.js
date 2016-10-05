(function($){    
    $(function(){

        $('#reg-online').click(function(){

        	$('body').removeClass('form-hidden');
        });

        $('span#drop-off').on('click',function(){

        	$('body').addClass('form-hidden');
        	console.log('hello');
        });



    });
})(jQuery);
