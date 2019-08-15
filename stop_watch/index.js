var time = document.getElementById('time');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset')
// var bool = false;

start.addEventListener('click', startCounting);
stop.addEventListener('click', stopCounting);
reset.addEventListener('click', function(){
    seconds = 00;
    minutes = 00;
    hours = 00;

    setTime();
})
var startCounting;

var seconds = 0;
var minutes = 0;
var hours = 0;
var counting = false;

function setTime(){
    let h = hours;
    let m = minutes;
    let s = seconds;
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

    time.innerHTML = `${h}:${m}:${s}`
}

function startCounting(){
    if(counting === false){
        counting = true;
        startCounting = setInterval(function(){
        seconds++
        if(seconds === 60){
            minutes++;
            seconds = 00;
        }
        if(minutes === 60){
            hours++;
            minutes = 00;
        }
        setTime();
      }, 1000)
    }
}

function stopCounting(){
    clearInterval(startCounting);
    counting = false;
}