// First bulb On/Off
let onBtn = document.querySelector('.onBtn')
console.log('onBtn')
let bulb = document.querySelector('.bulb')
function turnOnBulb(){
    bulb.src = "./image/bulb on.JPG";
}
// function turnOnBulb(){
//     bulb.src = "./image/light on.JPG";
// }

onBtn.addEventListener('click', turnOnBulb)

let offBtn = document.querySelector('.offBtn')

function turnOffBulb()
{bulb.src = "./image/bulb off.JPG";}

offBtn.addEventListener('click', turnOffBulb)


// // Second light On/Off 
let onLgtBtn = document.querySelector('.onLgtBtn')
console.log('onLgtBtn')
let light = document.querySelector('.light')
function turnOnLight(){
    light.src = "./image/light on.JPG";
}
onLgtBtn.addEventListener('click', turnOnLight)


 let offLgtBtn = document.querySelector('.offLgtBtn')
 function turnOffLight(){
    light.src = "./image/light off.JPG";
 }
 offLgtBtn.addEventListener('click', turnOffLight)