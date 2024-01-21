var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var off = document.querySelector("#off")
// var flag = 0
// btn.addEventListener("click",function(){
//     if(flag == 0){
//         bulb.style.backgroundColor = "yellow"
//         console.log("ON")
//         flag = 1
//     }
//     else{
//         bulb.style.backgroundColor = "transparent"
//         console.log("OFF")
//         flag = 0
//     }
// })

btn.addEventListener("click",function(){
    bulb.style.backgroundColor = "yellow"
})
off.addEventListener("click",function(){
    bulb.style.backgroundColor = "transparent"
})