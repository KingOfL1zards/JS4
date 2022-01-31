let firstNumber = document.getElementById(`first-number`)
let secondNumber = document.getElementById(`second-number`)
let btnPlus = document.querySelector(`#btn-plus`)
let btnMinus = document.querySelector(`#btn-minus`)
let btnMultiply = document.querySelector(`#btn-multiply`)
let btnDividet = document.querySelector(`#btn-dividet`)
let result = document.querySelector(`.result`)
btnPlus.onclick = function() {
    let sum = firstNumber.value*1 + secondNumber.value*1
    result.textContent = sum     
}
btnMinus.onclick = function() {
    let sum = firstNumber.value*1 - secondNumber.value*1
    result.textContent = sum     
}
btnMultiply.onclick = function() {
    let sum = firstNumber.value*1 * secondNumber.value*1
    result.textContent = sum     
}
btnDividet.onclick = function() {
    let sum = firstNumber.value*1 / secondNumber.value*1
    result.textContent = sum     
}
