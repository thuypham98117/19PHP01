$(document).ready(function() {
        $("#formDemo").validate({
            rules: {
                username: "required",
                address: {
                    required: true,
                    minlength: 2
                },
                tel: {
                     required: true,
                     minlength: 5
                },
                ngaydauki:{
                    required: true,
                     minlength: 5
                },
                ngaycuoiki:{
                    required: true,
                     minlength: 5
                },
                sodauki:{
                    required: true,
                     minlength: 5
                },
                socuoiki:{
                    required: true,
                     minlength: 5
                },
               }, 

            messages: {
                username: "Vui lòng nhập họ tên",
                address:
                 {
                    required: "Vui lòng nhập địa chỉ",
                 
                },
                tel:{
                            required: "Vui lòng nhập số điện thoại",
                            minlength: "Số máy quý khách vừa nhập là số không có thực"
                    },
                ngaydauki:{
                            required: "Vui lòng nhập ngày đầu kỳ",
                            minlength: "Ngày đầu kỳ của quý khách phải nhỏ hơn số cuối kỳ"
                },
                ngaycuoiki:{
                            required: "Vui lòng nhập ngày cuối kỳ",
                            minlength: "Ngày cuối kỳ của quý khách phải lớn hơn số đầu kỳ"
                    },
                sodauki:{
                            required: "Vui lòng nhập số đầu kỳ",
                            minlength: "Số đầu kỳ của quý khách phải nhỏ hơn số cuối kỳ"
                    },
                socuoiki:{
                            required: "Vui lòng nhập số cuối kỳ",
                            minlength: "Số cuối kỳ của quý khách phải lớn hơn số đầu kỳ"
                    },
            },
          success: function () {
							var number1 = document.getElementById('number1').value;
							var number2 = document.getElementById('number2').value;
							var number = number2 -  number1;
							var money;
							number1 = parseInt(number1);
							number2 = parseInt(number2);
							number = parseInt(number);
							if (number < 100) {
								money = number * 1500;
							}
							else if ((number > 100) && (number < 200)) {
								money  = 100*1500 + (number - 100)*2000;
							}
							else {
								money = 100*1500 + 100*2000 + (number-200)*3000;
							}
						
						$('#hoadon').css('display','block');
						document.getElementById('hd-name').innerHTML=$('#name').val();
						document.getElementById('hd-addr').innerHTML=$('#add').val();
						document.getElementById('hd-tel').innerHTML=$('#tel').val();
						document.getElementById('hd-fdate').innerHTML=$('#day1').val();
						document.getElementById('hd-ldate').innerHTML=$('#day2').val();
						document.getElementById('hd-fnum').innerHTML=$('#number1').val();
						document.getElementById('hd-lnum').innerHTML=$('#number2').val();
						document.getElementById('hd-note').innerHTML=$('#note').val();
						document.getElementById('hd-total').innerHTML=money;
					
						}
        });
    });
$(document).change(function(){
    var fDate = new Date(document.getElementById('day1').value);
    var lDate = new Date(document.getElementById('day2').value);
    var today = new Date();
    var fnum = parseInt(document.getElementById('number1').value);
    var lnum = parseInt(document.getElementById('number2').value);

  
    if (fDate > today) {
      alert("Ngày đầu kì đã vượt quá ngày hôm nay");
     $('#day1').val("");
    }

    if (fDate > lDate){
        alert("Ngày cuối kì phải lớn hơn ngày đầu kì");
    }

    if (lnum < fnum){
        alert("Số cuối kỳ phải lớn hơn số đầu kỳ");
    }
});

$('.input-submit').click(function(){
 			$('#hoadon').css('display','block');
 			document.getElementById('hd-name').innerHTML=$('#name').val();
 			document.getElementById('hd-addr').innerHTML=$('#add').val();
 			document.getElementById('hd-tel').innerHTML=$('#tel').val();
 			document.getElementById('hd-fdate').innerHTML=$('#day1').val();
			document.getElementById('hd-ldate').innerHTML=$('#day2').val();
			document.getElementById('hd-fnum').innerHTML=$('#number1').val();
 			document.getElementById('hd-lnum').innerHTML=$('#number2').val();
			document.getElementById('hd-note').innerHTML=$('#note').val();
			document.getElementById('hd-total').innerHTML=money;
			
 });
