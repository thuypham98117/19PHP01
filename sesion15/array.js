var myArray = [];
console.log( typeof myArray);

var myArray2 =  ['Nam', 'Trung', 'Hai', 'Tuan'];
console.log(myArray2[0]);

console.log(myArray2[2]);

console.log(myArray2.length);
for (var i = 0; i < myArray2.length; i++) {
	document.write('<p>' + myArray2[i] + '</p>');
}
document.write('<br>--------------');
var myArray3 = [5, 4, 9, 2, 78, 6, 12];
//	myArray3.sort(function (a, b) {return a-b});
//document.write('<p>' + myArray3 + '</p>') ;
console.log(myArray3);
var tmpNumber;
var n = myArray3.length;
for (var i = 0; i < n-1; i++) {
	for (var j = i +  1; j < n; j++) {
		if (myArray3[i] > myArray3[j]) {
			tmpNumber =  myArray3[i];
			myArray3[i] = myArray3[j];
			myArray3[j] = tmpNumber;
		}
	}
}
for (var i = 0; i < myArray3.length; i++) {
	document.write('<p>' + myArray3[i] + '</p>');
}
console.log(myArray3);