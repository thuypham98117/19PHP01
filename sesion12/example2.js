function sumNumber() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if (number1 == '') {
		document.getElementById('result').innerHTML = 'vui long dien so tai day';
	}
	else if (number2 == '') {
		document.getElementById('result').innerHTML = 'vui long dien so tai day';
	}
	else {
		document.getElementById('result').innerHTML = parseInt(number1) + parseInt(number2);
	}

}
function Subtraction () {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	document.getElementById('x').innerHTML = parseInt(number1) - parseInt(number2);

}
function Multiplication () {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	document.getElementById('y').innerHTML = parseInt(number1) * parseInt(number2);
}
function Division () {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	document.getElementById('z').innerHTML = parseInt(number1) / parseInt(number2);
}