function randomInRange(){
    let startNumber = parseInt(document.getElementById("from-el").value)
    let endNumber = parseInt(document.getElementById("to-el").value)
    let countNumber = parseInt(document.getElementById("count-el").value)
    let outputEl = document.getElementById("output-el")
    let answer = ``
    let i = 0
    while(i<countNumber){
        answer +=Math.floor(Math.random() * (endNumber - startNumber) + startNumber);
        answer += " "
        i++
    }
    outputEl.innerText = answer



}



