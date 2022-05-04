function calc(){
    answerEl = document.getElementById("answer")
    firstNumber = parseInt(document.getElementById("num1-input").value)
    secondNumber = parseInt(document.getElementById("num2-input").value)
    answerEl.innerText = "Answer:"
    count = 0
    while (count < 30){
        answerEl.innerText +=` ${(Math.floor(Math.random() * (secondNumber - firstNumber+1))+firstNumber)}`
        count++
    }
}