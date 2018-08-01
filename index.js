// Import module
const calc = require('./lib/math')
const colors = require('colors')
const readline = require('readline')
const fetch = require('node-fetch')


console.log(colors.cyan(` ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`))

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

const fetchFollowers = (uname) => {
    const url = `https://api.github.com/users/${uname}/followers`
    fetch(url)
        .then(Response => {
            return Response.json()
        })
        .then(data => {
            console.log(colors.blue(`[v] This is ${uname} followers list: `))
            data.forEach(user => {
                console.log(user.login)
            });
        })
}
// Get user input
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
input.question(colors.yellow('[?] What do you want to do?, [A] Running math function or [B] See github followers (A/B): '), (answer) => {
    if (answer === 'A') {
        console.log(colors.green(`[+] You selected A option, running math function`))
        input.question(colors.yellow(`[?] Do you want colorful output? [yes/no]: `), (answer) => {
            if (answer == 'yes') {
                colorState("on")
            } else if (answer == 'no') {
                colorState("off")
            } else {
                console.log(colors.red(`[x] Doesnt recognize the input, please choose A or B!`))
                console.log(colors.red(`[x] PROGRAM TERMINATED!!`))
                input.close()
            }
            input.close()
        })
    } else if (answer === 'B') {
        console.log(console.log(colors.green(`[+] You selected B option, running fetch followers function`)))
        input.question(colors.yellow('[?] Input username target: '), uname => {
            if (uname != "") {fetchFollowers(uname)}
            else {
                console.log(colors.red(`[x] Doesnt recognize the input, please choose A or B!`))
                console.log(colors.red(`[x] PROGRAM TERMINATED!!`))
                input.close()
            }
            input.close()
        })
    } else {
        console.log(colors.red(`[x] Doesnt recognize the input, please choose A or B!`))
        console.log(colors.red(`[x] PROGRAM TERMINATED!!`))
        input.close()
    }
})

