const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const numbers = document.getElementById('numbers')
var currentTime = new Date;
var hAngle;
var mAngle;
var sAngle = currentTime.getSeconds() * 6 + 270;
var currentHours;
var currentMins;
var currentSecs;
setTime();
setInterval(() => {
    setTime();
    setAngle();
    move();
}, 1000)
function move(){
    hours.style.transform = `rotate(${hAngle}deg)`
    minutes.style.transform = `rotate(${mAngle}deg)`
    seconds.style.transform = `rotate(${sAngle}deg)`
}
function setTime(){
    currentTime = new Date;
    currentHours = currentTime.getHours();
    currentMins = currentTime.getMinutes();
    currentSecs = currentTime.getSeconds();
}
function setAngle(){
    hAngle = ((currentHours * 30) - 90) + (currentMins * (1/60 * 30));
    mAngle = ((currentMins * 6) + 270) + (currentSecs * (1/60 * 6));
    sAngle = currentSecs * 6 + 270;
    sAngle += 6;
    if(sAngle == 360){
        sAngle = 0;
    }
}