$('.runMybox').click(function() {
	$('#myBox').animate({'font-size' : '30px'}, 'slow');
	$('#myBox').animate({'left' : '100px'});
	$('#myBox').animate({'top' : '300px'});
	$('#myBox').css({'color' : 'blue', 'background-color' : 'yellow'});
	$('#myBox').animate({'height' : '300px'});
	$('#myBox').animate({'width' : '300px'}, 'slow');
});
$('.run').click(function() {
	$('#myRun').animate({'right': '0px'}, 'slow');
	
	//$('#myRun').animate({'left' : '0px'});
	//$('#myRun').animate({'top' : '150px'});
});
$('.run1').click(function() {
	$('#myRun').css({'transform' : 'rotateY(180deg)'});
	$('#myRun').animate({'left' : '100px'});
});