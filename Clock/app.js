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
// var hourHashes;
var minuteHashes;
var hourHashAngle = 0;
var minuteHashAngle = 0;

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
function makeHashes(){
    
    let hourHashes;
    for(let i = 0; i < 12; i++){
        if(hourHashAngle % 90 == 0 || hourHashAngle == 0){
            let x = document.createElement('div');
            x.setAttribute('class', 'hourHash');
            x.setAttribute('id', `hash${i}`);
            x.style.transform = `rotate(${hourHashAngle}deg) translate(450%)`;
            x.style.transformOrigin = 'left center';
            numbers.append(x);
            
            hourHashAngle += 30;
        } else {
            let x = document.createElement('div');
            x.setAttribute('class', 'minuteHash hash');
            x.setAttribute('id', `hash${i}`);
            x.style.transform = `rotate(${hourHashAngle}deg) translate(1100%)`;
            x.style.transformOrigin = 'left';
            numbers.append(x);
            
            hourHashAngle += 30;

        }
    }
    // minuteHashes = Array(60).fill(
    //     document.createElement('div').setAttribute('class', 'minuteHash')
    // );
    // console.log(hourHashes)
}
function setHashAngle(){
    for(i = 0; i < hourHashes.length; i++){
        if(i % 10 == 0){
            numbers.append(hourHashes[i])
        }
    }
}
window.onload=function(){
    makeHashes();
    // setHashAngle();
}