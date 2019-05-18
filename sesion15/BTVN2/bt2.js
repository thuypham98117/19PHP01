document.getElementById('avatar').style.display = "none";
function getInfo() {
    var name = document.getElementById('name').value;
    document.getElementById('name1').innerHTML = name;

    var year = document.getElementById("year").value;
    year = parseInt(year);
    document.getElementById('birth').innerHTML = year;
    if (year > 1998)
        document.body.style.background = 'green';
    else
        document.body.style.background = 'yellow';
    
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    document.getElementById('avatar').style.display = "block";
    if (male) {
        document.images['avatar'].src = "images.jpg";
    }
    if (female) {
        document.images['avatar'].src = "tải xuống.jpg";
    }
}