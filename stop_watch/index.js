var time = document.getElementById('time');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset')
var list = document.getElementById('time_list');
var clearList = document.getElementById('clear_button');


start.addEventListener('click', startCounting);
stop.addEventListener('click', addToList);
reset.addEventListener('click', resetClock);
clearList.addEventListener('click', clear);

var startCounting;
var hundredths = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var counting = false;

function resetClock(){ //resets values back to 0 
    hundredths = 00;
    seconds = 00;
    minutes = 00;
    hours = 00;
    setTime();
}
function setTime(){  //sets the time on screen
    let h = hours;
    let m = minutes;
    let s = seconds;
    let hu = hundredths;
    if(hours < 10){  //add a 0 to display if only single digit
        h = hours.toString();
        h = "0" + h;
    }
    if(minutes < 10){  //add a 0 to display if only single digit
        m = minutes.toString();
        m = "0" + m;
    }
    if(seconds < 10){  //add a 0 to display if only single digit
        s = seconds.toString();
        s = "0" + s;
    }
    if(hundredths < 10){  //add a 0 to display if only single digit
        hu = hundredths.toString();
        hu = "0" + hu;
    }

    time.innerHTML = `${h}:${m}:${s}:${hu}`
}

function startCounting(){
    if(counting === false){  //makes sure clock isn't already running
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
    } else {
        stopCounting();
    }
}
function addToList(){
    let item = document.createElement('li');
    item.innerText = time.innerHTML;
    list.append(item);
}
function stopCounting(){
    clearInterval(startCounting);
    counting = false;
}
function clear(){
    while(list.firstChild){
        list.firstChild.remove();
    }
}