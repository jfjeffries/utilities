var time = document.getElementById('time');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset')


start.addEventListener('click', startCounting);
stop.addEventListener('click', stopCounting);
reset.addEventListener('click', resetClock)

var startCounting;
var hundredths = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var counting = false;

function resetClock(){
    hundredths = 00;
    seconds = 00;
    minutes = 00;
    hours = 00;
    setTime();
}
function setTime(){
    let h = hours;
    let m = minutes;
    let s = seconds;
    let hu = hundredths;
    if(hours < 10){
        h = hours.toString();
        h = "0" + h;
    }
    if(minutes < 10){
        m = minutes.toString();
        m = "0" + m;
    }
    if(seconds < 10){
        s = seconds.toString();
        s = "0" + s;
    }
    if(hundredths < 10){
        hu = hundredths.toString();
        hu = "0" + hu;
    }

    time.innerHTML = `${h}:${m}:${s}:${hu}`
}

function startCounting(){
    if(counting === false){
        counting = true;
        startCounting = setInterval(function(){
        hundredths++;
        if(hundredths === 100){
            seconds++;
            hundredths = 0;
        }
        if(seconds === 60){
            minutes++;
            seconds = 00;
        }
        if(minutes === 60){
            hours++;
            minutes = 00;
        }
        setTime();
      }, 10)
    }
}

function stopCounting(){
    clearInterval(startCounting);
    counting = false;
}