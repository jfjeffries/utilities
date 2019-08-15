// const dropFrom = document.getElementById("dropdownFrom");
// const dropTo = document.getElementById("dropdownTo");
// const fromLabel = document.getElementById("fromLabel");
// const toLabel = document.getElementById("toLabel");
// const fromInput = document.getElementById("fromInput");
// const convertBtn = document.getElementById("convertBtn");
// const answer = document.getElementById("answer");
// const fromBtn = document.getElementById("fromBtn");
// const toBtn = document.getElementById("toBtn");

// var fromUnit = "";
// var toUnit = "";
// const standard = {
//     length: ['inch', 'foot', 'yard', 'mile'],
//     weight: ['ounce', 'pound', 'ton'],
//     dryVolume: ['pint', 'quart', 'gallon', 'peck', 'bushel', 'barrel'],
//     fluidVolume: ['teaspoon', 'tablespoon', 'fluidOunce', 'cup', 'fluid pint', 'fluid quart', 'fluid gallon', 'fluid barrel', 'hogshead']
// }
// const metric = {
//     length: ['millimeter'],
//     weight: [],
//     dryVolume: [],
//     fluidVolume: []
// }



// $('#dropdownFrom li').on('click', function(e){
//     // console.log(e.target.classList);
//     if(e.target.classList.contains('dropdown-item')){
//         fromBtn.innerHTML = $(e.target).text();
//         fromUnit = $(e.target).text();
//         populateToList(e.target.parentElement.getAttribute('id'));
//     }
// })
// $('#dropdownTo li').on('click', function(e){
//     toBtn.innerHTML = $(e.target).text();
//     toUnit = $(e.target).text();
// })
// $(convertBtn).on('click', function(e){
//     e.preventDefault();
//     if(parseFloat(fromInput.value)){
//         if(fromUnit){
//             if(toUnit){
//                 handleSubmit(parseFloat(fromInput.value));
//             } else {
//                 answer.value = "Pick a unit to convert to."
//             }
//         } else {
//             answer.value = "Pick a unit to convert from."
//         }
//     } else {
//         answer.value = "Please enter a number."
//     }
// })
// function handleSubmit(val){
//     console.log(val, fromUnit, toUnit)
//     switch (fromUnit.toLowerCase()){
//         case "inch": {
//             switch (toUnit){
//                 case "foot": {
//                     answer.value = val / 12;
//                     break;
//                 }
//                 case "yard": {
//                     answer.value = val / 36;
//                     break;
//                 }
//                 case "mile": {
//                     answer.value = val / 63360;
//                 }
//             }
//         }
//         case "foot": {
//             switch (toUnit){
//                 case "inch": {
//                     answer.value = val * 12;
//                     break;
//                 }
//                 case "yard": {
//                     answer.value = val / 3;
//                     break;
//                 }
//                 case "mile": {
//                     answer.value = val / 5280;
//                 }
//             }
//         }
//         case "yard": {
//             switch (toUnit){
//                 case "inch": {
//                     answer.value = val * 36;
//                     break;
//                 }
//                 case "foot": {
//                     answer.value = val * 3;
//                     break;
//                 }
//                 case "mile": {
//                     answer.value = val / 1760;
//                     break;
//                 }
//             }
//         }
//         case "mile": {
//             switch (toUnit){
//                 case "inch": {
//                     answer.value = val * 63360;
//                     break;
//                 }
//                 case "foot": {
//                     answer.value = val * 5280;
//                     break;
//                 }
//                 case "yard": {
//                     answer.value = val * 1760;
//                     break;
//                 }
//             }
//         }
//         case "ounce": {
//             switch (toUnit){
//                 case "pound": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "ton": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "pound": {
//             switch (toUnit){
//                 case "ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "ton": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "ton": {
//             switch (toUnit){
//                 case "ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "pound": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "pint": {
//             switch (toUnit){
//                 case "quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "peck": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "bushel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "quart": {
//             switch (toUnit){
//                 case "pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "peck": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "bushel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "gallon": {
//             switch (toUnit){
//                 case "pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "peck": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "bushel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "peck": {
//             switch (toUnit){
//                 case "pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "bushel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "bushel": {
//             switch (toUnit){
//                 case "pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "peck": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "barrell": {
//             switch (toUnit){
//                 case "pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "peck": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "bushel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "teaspoon": {
//             switch (toUnit){
//                 case "tablespoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "cup": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "hogshead": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "tablespoon": {
//             switch (toUnit){
//                 case "teaspoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "cup": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "hogshead": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "fluid ounce": {
//             switch (toUnit){
//                 case "teaspoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "tablespoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "cup": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "hogshead": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }     
//             }
//         }
//         case "cup": {
//             switch (toUnit){
//                 case "teaspoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "tablespoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "hogshead": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }               
//             }
//         }
//         case "fluid pint": {
//             switch (toUnit){
//                 case "teaspoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "tablespoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "cup": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "hogshead": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }               
//             }
//         }
//         case "fluid quart": {
//             switch (toUnit){
//                 case "teaspoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "tablespoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "cup": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "hogshead": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//             }
//         }
//         case "fluid gallon": {
//             switch (toUnit){
//                 case "teaspoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "tablespoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "cup": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid barrel": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "hogshead": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }              
//             }
//         }
//         case "fluid barrel": {
//             switch (toUnit){
//                 case "teaspoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "tablespoon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid ounce": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "cup": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid pint": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid quart": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "fluid gallon": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }
//                 case "hogshead": {
//                     answer.value = (val / 16).toFixed(2);
//                     break;
//                 }     
//             }
//         }
//         case "hogshead": {
//             switch (toUnit){
//                 case "teaspoon": {}
//                 case "tablespoon": {}
//                 case "fluid ounce": {}
//                 case "cup": {}
//                 case "fluid pint": {}
//                 case "fluid quart": {}
//                 case "fluid gallon": {}
//                 case "fluid barrel": {}
//             }
//         }
//     }
// }

// function convert(num){
//     switch(fromUnit){
        
//     }
// }
// function populateToList(unit){
//     if($("#dropdownTo:first-child")){
//         $("#dropdownTo").empty();
//     }
//     standard[unit].forEach(key => {
//         $("#dropdownTo").append(`<li class="dropdown-item">${key}</li>`)
//     })
//     metric[unit].forEach(key => {
//         $("#dropdownTo").append(`<li class="dropdown-item">${key}</li>`)
//     })
//     $('#dropdownTo li').on('click', function(e){
//         // console.log(e.target.classList);
//         if(e.target.classList.contains('dropdown-item')){
//             toBtn.innerHTML = $(e.target).text();
//             toUnit = $(e.target).text();
//         }
//     })
// }

// $('#reset').on('click', function(){
//     window.location.reload();
// });
