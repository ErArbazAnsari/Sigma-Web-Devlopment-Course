let random = Math.random()
console.log(random)
let num1 = prompt("Enter First Number")
let operation = prompt("Enter Operation (+,-,*,/)")
let num2 = prompt("Enter Second Number")

let answer = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > .10) {
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`)
}
else {
    operation = answer[operation]
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`)

}