$(function(){
	
	// autoresizing textarea
	$(".flexiarea").autosize();   
	
	//jquery datepicker driving via css class
	$(".datepicker").datepicker({
				inline: true,
				//nextText: '&rarr;',
				//prevText: '&larr;',
				showOtherMonths: true,
				dateFormat: 'yy-mm-dd',
				dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				//showOn: "button",
				//buttonImage: "img/calendar-blue.png",
				//buttonImageOnly: true,
			});
	
	
});
