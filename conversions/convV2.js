const dropFrom = document.getElementById("dropdownFrom");
const dropTo = document.getElementById("dropdownTo");
const fromLabel = document.getElementById("fromLabel");
const toLabel = document.getElementById("toLabel");
const fromInput = document.getElementById("fromInput");
const convertBtn = document.getElementById("convertBtn");
const answer = document.getElementById("answer");
const fromBtn = document.getElementById("fromBtn");
const length = document.getElementById("length");
const weight = document.getElementById("weight");
const volume = document.getElementById("volume");

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

$(window).on('load', () => {
    changeButtonColor();
    populateList();
});
$("#fromInput").on('input', (e) => {
    changeButtonColor();
})

$('#dropdownFrom li').on('click', function(e){
    if(e.target.classList.contains('dropdown-item')){
        fromBtn.innerHTML = $(e.target).text();
        fromUnit = $(e.target).text().toLowerCase();
        fromUnitType = e.target.classList[1];
        if(fromUnitType != toUnitType){          
            toBtn.innerText = "Select";            
        }
        populateToList(e.target.parentElement.getAttribute('id'));
    }
    changeButtonColor();
});

$('#dropdownTo li').on('click', function(e){
    toBtn.innerHTML = $(e.target).text();
    toUnit = $(e.target).text();
    
});
$(convertBtn).on('click', function(e){
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
    console.log(val, fromUnit, toUnit)
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
    $(fromBtn).removeClass("blinking");
    $(toBtn).removeClass("blinking");
    $(fromInput).removeClass("inputBlink");
    
    if(!fromUnit){
        $(fromBtn).addClass("blinking");
    } else if (fromUnit && !toUnit){
        $(toBtn).addClass("blinking");
    } else if(!x){
        $(fromInput).addClass("inputBlink");
    } else {
        $(convertBtn).addClass("blinking");
    }
}

function populateToList(unit){
    if($("#dropdownTo:first-child")){
        $("#dropdownTo").empty();
    }
    standard[unit].forEach(key => {
        $("#dropdownTo").append(`<li class="dropdown-item myLi">${key}</li>`)
    });
    metric[unit].forEach(key => {
        $("#dropdownTo").append(`<li class="dropdown-item myLi">${key}</li>`)
    });
    $('#dropdownTo li').on('click', function(e){
        toUnitType = unit;
        if(e.target.classList.contains('dropdown-item')){
            toBtn.innerHTML = $(e.target).text();
            toUnit = $(e.target).text();
            changeButtonColor();
        }
    });
}

function populateList(){
    for(key in standard){
        standard[key].forEach(value => {
            switch(key.toLowerCase()){
                case "length":{
                    $(length).append(`<li class="dropdown-item length myLi">${value}</li>`);
                    break;
                }
                case "weight":{
                    $(weight).append(`<li class="dropdown-item weight myLi">${value}</li>`);
                    break;
                }
                case "volume":{
                    $(volume).append(`<li class="dropdown-item volume myLi">${value}</li>`);

                }
            }
        });
    }
    for(key in metric){
        metric[key].forEach(value => {
            switch(key.toLowerCase()){
                case "length":{
                    $(length).append(`<li class="dropdown-item length myLi">${value}</li>`);
                    break;
                }
                case "weight":{
                    $(weight).append(`<li class="dropdown-item weight myLi">${value}</li>`);
                    break;
                }
                case "volume":{
                    $(volume).append(`<li class="dropdown-item volume myLi">${value}</li>`);

                }
            }
        });
    }
}

$('#reset').on('click', function(){
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
    console.log(to)
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
        case 'imp cup': (1 / 57.646);
        case 'imp pint': return (1 / 115.291);
        case 'imp quart': return (1 / 230.582);
        case 'liter': return (1 / 202.884);
        case 'imp gallon': return (1 / 922.33);
    }
}

function teaspoonsFrom(from){
    console.log(from)
    switch(from){
        case "us teaspoon": return 1;
        case "us tablespoon": return 3;
        case "us fluid ounce": return 6;
        case "us cup": return 48.6922;
        case "fluid pint": return 96;
        case "fluid quart": return 192;
        case "fluid gallon": return 768;
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
