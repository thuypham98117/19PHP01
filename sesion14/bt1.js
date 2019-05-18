var Binh = 27;
var Minh = 9;
var x = 0;
while (Binh != Minh*2) {
	Binh--;
	Minh++;
	x++;
}
document.write("Binh phải chuyển cho Minh số sách là: ",x);
document.write('<br>');

var m, t, y;
m = 2000;
t = 200;
y = 0;
while (m > 0) {
	y++;
	if (y % 2 == 0) {
		y++;
	}
	m = m - t;
}
document.write("Số kẹo mua dc là: ",y);