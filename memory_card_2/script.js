function myFunction(){
alert("Hello world!");
}

// function myClock() {
//     document.getElementById("Clock").innerHTML =
//     new Date().toLocaleTimeString();
// }


function myClock() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('Clock').innerHTML =
    h + ":" + m + ":" + s;
    let t = setTimeout(myClock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//myFunction();
