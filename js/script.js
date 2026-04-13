let isOn = false;

function toggleLamp() {
    const lamp = document.getElementById("lamp");
    const btn = document.getElementById("btn");

    if (isOn) {
        lamp.src = "images/light-off.png";
        btn.innerText = "Turn ON";
    } else {
        lamp.src = "images/light-on.png";
        btn.innerText = "Turn OFF";
    }

    isOn = ! isOn;
}