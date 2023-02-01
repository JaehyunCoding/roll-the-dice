const prompt = require("prompt-sync")({sigint: true})

let user = (prompt("What number would you like to make? "))
let num1 = (Math.ceil(Math.random()*6))
let num2 = (Math.ceil(Math.random()*6))

if(user = num1 + num2){
    console.log(num1, num2)
}   else if(user <2 || user >12){
    console.log("error")
}
