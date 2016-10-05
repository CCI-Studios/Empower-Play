(function($){

	$(function()
	{
		$('#block-block-15').click(togglemenu);
		var row_num = $('.view-events-block .views-row').length;

		if(row_num < 2)
		{
			$('body').addClass('one-event');
		}
	});

	function togglemenu()
	{
		$('#block-system-main-menu').slideToggle('slow');		
	}

}(jQuery));