$('.demo1_click').click(function(){
	$('#demo1').html('Hello jquery');
});

$('.demo2_click').click(function(){
	$('#demo2').css({'color':'red', 'font-size':'30px'});
});

$('.demo3_click').click(function(){
	$('.demo3').attr('src', 'img/36.jpg');
});

$('.demo4_show').click(function(){
	$('#demo4').show();
});
$('.demo4_hide').click(function(){
	$('#demo4').hide();
});