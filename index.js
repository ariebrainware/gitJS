// Import module
const calc = require('./lib/math')
const colors = require('colors')
const readline = require('readline')

// Function definition
const colorState = (value = "off") => {
    if (value == "on") {
        console.log(colors.green(`4 + 2 = ${calc.add(4,2)}`))
        console.log(colors.rainbow(`8 - 12 = ${calc.substract(8,12)}`))
        console.log(colors.rainbow(`9 / 3 = ${calc.divide(9,3)}`))
        console.log(colors.rainbow(`10 * 89 = ${calc.multiply(10,89)}`))
        console.log(colors.rainbow(`40 % 3 = ${calc.modulo(40,3)}`))
        
    } else {
        console.log(`4 + 2 = ${calc.add(4,2)}`)
        console.log(`8 - 12 = ${calc.substract(8,12)}`)
        console.log(`9 / 3 = ${calc.divide(9,3)}`)
        console.log(`10 * 89 = ${calc.multiply(10,89)}`)
        console.log(`40 % 3 = ${calc.modulo(40,3)}`)
    }
}

// Get user input
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question('Do you want colorful output?: ', (answer) =>{
    if(answer == 'yes'){ colorState("on")} 
    else if(answer == 'no'){ colorState("off")}
    input.close()
} )