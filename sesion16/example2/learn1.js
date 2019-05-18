$('.runMybox').click(function() {
	$('#myBox').animate({'font-size' : '30px'}, 'slow');
	$('#myBox').animate({'left' : '100px'});
	$('#myBox').animate({'top' : '300px'});
	$('#myBox').css({'color' : 'blue', 'background-color' : 'yellow'});
	$('#myBox').animate({'height' : '300px'});
	$('#myBox').animate({'width' : '300px'}, 'slow');
});

$('.showHide').click(function() {
	$('#myBox').hide(4000).css('color', 'red').show(5000);
});