const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const numbers = document.getElementById('numbers')
var currentTime = new Date;
var hAngle;
var mAngle;
var sAngle;
var currentHours;
var currentMins;
var currentSecs;
var hourHashAngle = 0;
var minuteHashAngle = 0;

// hours.addEventListener('change', setBoxShadow(event));
// minutes.addEventListener('change', setBoxShadow(event));
// seconds.addEventListener('change', setBoxShadow(event));

setTime();
setInterval(() => {
    setTime();
    setAngle();
    move();
    setBoxShadow();
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
    mAngle = (((currentMins * 6) + 270) + (currentSecs * (1/60 * 6))) - 360;
    sAngle = setSeconds();
    // console.log(hAngle, mAngle, sAngle)
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
}
function setHashAngle(){
    for(i = 0; i < hourHashes.length; i++){
        if(i % 10 == 0){
            numbers.append(hourHashes[i])
        }
    }
}
function setBoxShadow(){
    hours.style.boxShadow = calculateBoxShadow(hAngle);
    minutes.style.boxShadow = calculateBoxShadow(mAngle);
    seconds.style.boxShadow = calculateBoxShadow(sAngle);
}
function calculateBoxShadow(angle){
    let first = 0;
    let second = 0;
    
        if (angle > 0 && angle < 11.25){
            first = 2;
            second = -2;
        }
        if (angle >= 11.25 && angle < 33.75){
            first = 1;
            second = -3;
        }
        if (angle >= 33.75 && angle < 56.25){
            first = 0;
            second = -4;
        }
        if (angle >= 56.25 && angle < 78.75){
            first = 1;
            second = -3;
        }
        if (angle >= 78.75 && angle < 101.25){
            first = 2;
            second = -2;
        }
        if (angle >= 101.25 && angle < 123.75){
            first = 3;
            second = -1;
        }
        if (angle >= 123.75 && angle < 146.25){
            first = 4;
            second = 0;
        }
        if (angle >= 146.25 && angle < 168.75){
            first = 3;
            second = 1;
        }
        if (angle >= 168.75 && angle < 191.25){
            first = 2;
            second = 2;
        }
        if (angle >= 191.25 && angle < 213.75){
            first = 1;
            second = 3;
        }
        if (angle >= 213.75 && angle < 236.25){
            first = 0;
            second = 4;
        }
        if (angle >= 236.25 && angle < 258.75){
            first = 1;
            second = 3;
        }
        if (angle >= 258.75 && angle < 281.25){
            first = 2;
            second = 2;
        }
        if (angle >= 281.25 && angle < 303.75){
            first = 3;
            second = 1;
        }
        if (angle >= 303.75 && angle < 326.25){
            first = 4;
            second = 0;
        }
        if (angle >= 326.25 && angle < 348.75){
            first = 3;
            second = -1;
        }
        if (angle >= 348.75){
            first = 2;
            second = -2;
        }
    return `${first}px ${second}px 4px rgb(64, 64, 64)`;
}
function setSeconds(){
    if(currentSecs * 6 + 270 >= 360){
        return (currentSecs * 6 + 270) - 360;
    } else {
        return currentSecs * 6 + 270;
    }
}
window.onload=function(){
    makeHashes();
}