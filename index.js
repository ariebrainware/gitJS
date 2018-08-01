// Import module
const calc = require('./lib/math')
const color = require('color')
const readline = require('readline')

// Function definition
const colorState = (value = off) => {
    if (value === off) {
        console.log(color.green(`4 + 2 = ${calc.add(4,2)}`))
        console.log(color.rainbow(`8 - 12 = ${calc.substract(8,12)}`))
        console.log(color.rainbow(`9 / 3 = ${calc.divide(9,3)}`))
        console.log(color.rainbow(`10 * 89 = ${calc.multiply(10,89)}`))
        console.log(color.rainbow(`40 % 3 = ${calc.modulo(40,3)}`))
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
    if(answer == "yes") colorState(on)
    else colorState(off)
} )