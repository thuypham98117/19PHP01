for (var i = 0; i < 10; i++){
	document.write(i);
	document.write('<br>');
}
document.write('-----------------------<br>');
var x = 5;
var y = 5;
x++;
y--;
document.write(x);
document.write('<br>');
document.write(y);

var a = 5, b = 7;
var c;
c = ++a + ++b;
c = a++ + b++;
document.write('<br>');
document.write(c);

document.write('<br>');
document.write('-----------------------<br>');
var i = 5;
do {
	document.write(i);
	document.write('<br>');
	i++;
} while (i < 10);

document.write('<br>');
document.write('-----------------------<br>');
var i = 5;
while (i < 10) {
	document.write(i);
	document.write('<br>');
	i++;
}

for (var i = 2; i <= 15; i++) {
	switch (i) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			document.write('Hom nay la thu ' + i);
			document.write('<br');
			break;
		case 8:
			document.write('Hom nay la chu nhat ');
			document.write('<br');
			break;
		default:
			document.write('So nay khong phai ngay trong tuan ');
			document.write('<br');
			break;
	}
}

document.write('<br>');


function myFunction() {
	var a = 5, b = 6;
	document.write(a + b);
}
document.write('<br>');
myFunction();

document.write('<br>');
function sub(x, y) {
	document.write(x + y);
}
document.write('<br>');
sub(6, 7);
document.write('<br>');
sub(9, 6);


document.write('<br>');

var lcb = 2300000;
for ( var namKN = 0; namKN <= 10; namKN++) {
	if (namKN < 3) {
		LuongThucNhan(lcb, 2);
		document.write('<br>');
	}
	else if (namKN < 5) {
		LuongThucNhan(lcb, 3);
		document.write('<br>');
	}
	else if (namKN == 5) {
		LuongThucNhan(lcb, 4);
		document.write('<br>');
	}
	else {
		LuongThucNhan(lcb, 5);
		document.write('<br>');
	}
}
function LuongThucNhan(lcb, hsn) {
	document.write(lcb * hsn);
}