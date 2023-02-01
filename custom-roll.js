const prompt = require("prompt-sync")({sigint: true})

let user = prompt("How many sides do you want to have on your dice? ")
let dice = Math.ceil(Math.random() * user)

if (user > 3) {
    console.log(dice)

}   else {
    console.log("error")
}

// Whats different between 'prompt' and Number'prompt?
// >= is correct! No ==>... mistake...
// "" and ''... are they different seriously?

