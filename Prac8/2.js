function add(){
    answerEl.innerText = ""
    firstNumber = document.getElementById("num1-input").value
    secondNumber = document.getElementById("num2-input").value
    answerEl = document.getElementById("answer")
    answer = parseInt(firstNumber) + parseInt(secondNumber)
    answerEl.innerText = `Answer: ${answer}`
}

function sub(){
    firstNumber = document.getElementById("num1-input").value
    secondNumber = document.getElementById("num2-input").value
    answerEl = document.getElementById("answer")
    answer = parseInt(firstNumber) - parseInt(secondNumber)
    answerEl.innerText = `Answer: ${answer}`
}
function div(){
    firstNumber = document.getElementById("num1-input").value
    secondNumber = document.getElementById("num2-input").value
    answerEl = document.getElementById("answer")
    answer = parseInt(firstNumber) / parseInt(secondNumber)
    answerEl.innerText = `Answer: ${answer}`
}
function mul(){
    firstNumber = document.getElementById("num1-input").value
    secondNumber = document.getElementById("num2-input").value
    answerEl = document.getElementById("answer")
    answer = parseInt(firstNumber) * parseInt(secondNumber)
    answerEl.innerText = `Answer: ${answer}`
}
function exp(){
    firstNumber = document.getElementById("num1-input").value
    secondNumber = document.getElementById("num2-input").value
    answerEl = document.getElementById("answer")
    answer = parseInt(firstNumber) ** parseInt(secondNumber)
    answerEl.innerText = `Answer: ${answer}`
}
function root(){
    firstNumber = document.getElementById("num1-input").value
    secondNumber = document.getElementById("num2-input").value
    answerEl = document.getElementById("answer")
    answer = Math.pow(firstNumber, 1/secondNumber);
    answerEl.innerText = `Answer: ${answer}`
}



