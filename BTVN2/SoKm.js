function SoKM(){
    var km = document.getElementById('nb').value;
    km = parseInt(km);
    if (km == 1) 
        document.getElementById('kq').innerHTML = 15000+'VNĐ';
    else if (km <= 30) 
        document.getElementById('kq').innerHTML = 12000*km+'VNĐ';
    else if (km > 30 ) 
        document.getElementById('kq').innerHTML = 8000*km+'VNĐ';
}