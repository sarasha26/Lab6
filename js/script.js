//Global variables
let futureValue
let investment
let rate
let years

//Collect values from the user
investment = parseFloat(prompt('Enter the amount you would like to invest as xxxx.xx'))
rate = parseFloat(prompt('Enter the rate as xx.x'))
years = parseInt(prompt('Enter the number of years you would like to invest for'))

//Calculate future investment value
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate/100)
}

//Display result
document.write(`Investment Amount : $${investment.toFixed(2)}</br>`)
document.write(`Interest rate: $${rate.toFixed(2)} </br>`)
document.write(`Years : ${years} </br>`)
document.write(`Future Value : $${futureValue.toFixed(2)}`)