function calc(){
    answerEl = document.getElementById("answer")
    answerEl.innerText = "Answer:"
    count = 0
    while (count < 30){
        answerEl.innerText +=` ${Math.floor(Math.random() * 31)}`
        count++
    }
}