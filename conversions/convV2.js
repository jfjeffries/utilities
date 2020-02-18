const dropFrom = document.getElementById("dropdownFrom");
const dropTo = document.getElementById("dropdownTo");
const fromLabel = document.getElementById("fromLabel");
const toLabel = document.getElementById("toLabel");
const fromInput = document.getElementById("fromInput");
const convertBtn = document.getElementById("convertBtn");
const answer = document.getElementById("answer");
const fromBtn = document.getElementById("fromBtn");
const toBtn = document.getElementById("toBtn");
const length = document.getElementById("length");
const weight = document.getElementById("weight");
const volume = document.getElementById("volume");
const reset = document.getElementById("reset");
const length_li = document.getElementById("length_li");
const weight_li = document.getElementById("weight_li");
const volume_li = document.getElementById("volume_li");


var fromUnit = "";
var toUnit = "";
var fromUnitType = "";
var toUnitType = "";
const standard = {
    length: ['Inch', 'Foot', 'Yard', 'Mile'],
    weight: ['Ounce', 'Pound', 'Ton'],
    volume: ['US Teaspoon', 'US Tablespoon', 'US Fluid Ounce', 'US Cup', 'US Pint', 'US Quart', 'US Gallon']
}
const metric = {
    length: ['Millimeter', 'Centimeter', 'Meter', 'Kilometer'],
    weight: ['Microgram', 'Milligram', 'Gram', 'Kilogram', 'Metric Ton'],
    volume: ['Milliliter','Imp Teaspoon', 'Imp Tablespoon', 'Imp Fluid Ounce', 'Imp Cup', 'Imp Pint', 'Imp Quart', 'Liter', 'Imp Gallon']
}
length_li.addEventListener('mouseenter', e => {
    length.style.display = 'block';
})
length_li.addEventListener('mouseleave', e => {
    length.style.display = 'none';
})
weight_li.addEventListener('mouseenter', e => {
    weight.style.display = 'block';
})
weight_li.addEventListener('mouseleave', e => {
    weight.style.display = 'none';
})
volume_li.addEventListener('mouseenter', e => {
    volume.style.display = 'block';
})
volume_li.addEventListener('mouseleave', e => {
    volume.style.display = 'none';
})
window.addEventListener('load', () => {
    changeButtonColor();
    populateList();
});
fromBtn.addEventListener('click', e => {
    dropFrom.style.display = 'block';
})
toBtn.addEventListener('click', e => {
    dropTo.style.display = 'block';
})
dropTo.addEventListener('mouseleave', e => {
    dropTo.style.display = 'none';
})
fromInput.addEventListener('input', (e) => {
    changeButtonColor();
})
dropFrom.addEventListener('mouseleave', e => {
    dropFrom.style.display = 'none';
})
let fromList = document.getElementsByClassName('fromLi')
for(let li of fromList ){
    li.addEventListener('click', function(e){
        if(e.target.classList.contains('dropdown-item')){
            fromBtn.innerHTML = e.target.innerText;
            fromUnit = e.target.innerText.toLowerCase();
            fromUnitType = e.target.classList[1];
            console.log(fromUnitType);
            if(fromUnitType != toUnitType){          
                toBtn.innerText = "Select";
            }
            populateToList(e.target.parentElement.getAttribute('id'));
        }
        changeButtonColor();
        dropFrom.style.display = 'none';
    });
}


convertBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(parseFloat(fromInput.value)){
        if(fromUnit){
            if(toUnit){
                handleSubmit(parseFloat(fromInput.value), fromUnitType);
                handleSubmit(parseFloat(fromInput.value), fromUnitType);
            } else {
                answer.value = "Pick a unit to convert to."
            }
        } else {
            answer.value = "Pick a unit to convert from."
        }
    } else {
        answer.value = "Please enter a number."
    }
});
function handleSubmit(val, type){
    console.log(val, type)
    if(fromUnit.toLowerCase() == toUnit.toLowerCase()){
        answer.value = val;
    } else {
        switch(type){
            case "length":{
                answer.value = (val * inchesFrom(fromUnit.toLowerCase()) * inchesTo(toUnit.toLowerCase())).toFixed(6);
                break;
            }
            case "weight":{
                answer.value = (val * ouncesFrom(fromUnit.toLowerCase()) * ouncesTo(toUnit.toLowerCase())).toFixed(6);
                break;
            }
            case "volume": {
                answer.value = (val * teaspoonsFrom(fromUnit.toLowerCase()) * teaspoonsTo(toUnit.toLowerCase())).toFixed(6);
                break;
            }
        }
    }
}

function changeButtonColor(){
    let x = fromInput.value;
    fromBtn.classList.remove("blinking");
    toBtn.classList.remove("blinking");
    fromInput.classList.remove("inputBlink");
    
    if(!fromUnit){
        fromBtn.classList.add("blinking");
    } else if (fromUnit && !toUnit){
        toBtn.classList.add("blinking");
    } else if(!x){
        fromInput.classList.add("inputBlink");
    } else {
        convertBtn.classList.add("blinking");
    }
}

function populateToList(unit){
    let toList = document.querySelectorAll('#dropdownTo li');
    toList.forEach(li => {
        li.parentNode.removeChild(li);
    })
    standard[unit].forEach(key => {
        let li = document.createElement('li');
        li.setAttribute('class', 'dropdown-item myLi')
        li.innerText = key;
        dropdownTo.append(li);
        li.addEventListener('click', e => {
            toUnitType = unit;
            if(e.target.classList.contains('dropdown-item')){
                toBtn.innerHTML = e.target.innerText;
                toUnit = e.target.innerText;
                changeButtonColor();
            }
            dropdownTo.style.display = 'none';
        })
    });
    metric[unit].forEach(key => {
        let li = document.createElement('li');
        li.setAttribute('class', 'dropdown-item myLi');
        li.innerText = key;
        dropdownTo.append(li);
        li.addEventListener('click', e => {
            toUnitType = unit;
            if(e.target.classList.contains('dropdown-item')){
                toBtn.innerHTML = e.target.innerText;
                toUnit = e.target.innerText;
                changeButtonColor();
            }
            dropdownTo.style.display = 'none';
        })
    });
}

function populateList(){
    for(key in standard){
        standard[key].forEach(value => {
            let li = document.createElement('li');
            li.setAttribute('class', `dropdown-item ${key.toLowerCase()} myLi`);
            li.innerText = value;
            li.addEventListener('click', e => {})
            switch(key.toLowerCase()){
                case "length":{
                    length.append(li);
                    break;
                }
                case "weight":{
                    weight.append(li);
                    break;
                }
                case "volume":{
                    volume.append(li);
                    break;
                }
            }
        });
    }
    for(key in metric){
        metric[key].forEach(value => {
            let li = document.createElement('li');
            li.setAttribute('class', `dropdown-item ${key.toLowerCase()} myLi`);
            li.innerText = value;

            switch(key.toLowerCase()){
                case "length":{
                    length.append(li);
                    break;
                }
                case "weight":{
                    weight.append(li);
                    break;
                }
                case "volume":{
                    volume.append(li);

                }
            }
        });
    }
}

reset.addEventListener('click', function(){
    window.location.reload();
});
function inchesFrom(from){
    switch(from){
        case "inch": return 1;
        case "foot": return 12;
        case "yard": return 36;
        case "mile": return 63360;
        case 'millimeter': return (.0393701);
        case 'centimeter': return (.393701);
        case 'meter': return 39.3701;
        case 'kilometer': return 39370.1;
    }
}
function inchesTo(to){
    switch(to){
        case "inch": return 1;
        case "foot": return (1 / 12);
        case "yard": return (1 / 36);
        case "mile": return (1 / 63360);
        case 'millimeter': return 25.4;
        case 'centimeter': return 2.54;
        case 'meter': return (1 / 39.3701);
        case 'kilometer': return (1 / 39370.1);
    }
}
function ouncesFrom(from){
    console.log(from)
    switch(from){
        case "ounce": return 1;
        case "pound": return 16;
        case "ton": return 32000;
        case 'microgram': return (.001 * ouncesFrom('milligram'));
        case 'milligram': return (.001);
        case 'gram': return (.035274);
        case 'kilogram': return 35.275;
        case 'metric ton': return 35274; 
    }
}
function ouncesTo(to){
    console.log(to)
    switch(to){
        case "ounce": return 1;
        case "pound": return (1 / 16);
        case "ton": return (1 / 32000);
        case 'microgram': return (1000 * ouncesTo('milligram'));
        case 'milligram': return 28349.5;
        case 'gram': return 28.3495;
        case 'kilogram': return (.0283495)
        case 'metric ton': return (.001 * ouncesTo('kilogram'));
    }
}

function teaspoonsTo(to){
    switch(to){
        case "us teaspoon": return 1;
        case "us tablespoon": return (1 / 3);
        case "us fluid ounce": return (1 / 6);
        case "us cup": return (1 / 48.6922);
        case "us pint": return (1 / 96);
        case "us quart": return (1 / 192);
        case "us gallon": return (1 / 768);
        case 'milliliter': return 4.92892;
        case 'imp teaspoon': return (1 / 1.201);
        case 'imp tablespoon': return (1 / 3.603);
        case 'imp fluid ounce': return (1 / 5.765);
        case 'imp cup': return (1 / 57.646);
        case 'imp pint': return (1 / 115.291);
        case 'imp quart': return (1 / 230.582);
        case 'liter': return (1 / 202.884);
        case 'imp gallon': return (1 / 922.33);
    }
}

function teaspoonsFrom(from){
    switch(from){
        case "us teaspoon": return 1;
        case "us tablespoon": return 3;
        case "us fluid ounce": return 6;
        case "us cup": return 48.6922;
        case "us pint": return 96;
        case "us quart": return 192;
        case "us gallon": return 768;
        case 'milliliter': return (.202884);
        case 'imp teaspoon': return 1.20095;
        case 'imp tablespoon': return 3.60285;
        case 'imp fluid ounce': return 5.76456;
        case 'imp cup': return 57.6456;
        case 'imp pint': return 115.291;
        case 'imp quart': return 230.582;
        case 'liter': return 202.884;
        case 'imp gallon': return 922.33;
    }
}
