let lamp = document.getElementById("lamp");
let btn = document.getElementById("btn");

let isOn = false;

function toggleLamp() {
    if (isOn) {
        lamp.src = "images/light-off.png";
        btn.innerText = "Turn ON";
    } else {
        lamp.src = "images/light-on.png";
        btn.innerText = "Turn OFF";
    }

    isOn = ! isOn;
}