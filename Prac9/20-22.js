function stringCounter(){
    let inputEl = document.getElementById("input-el").value
    let outputEl = document.getElementById("output-el")
    let answer = inputEl.length
    outputEl.innerText = answer

}
function aCounter(){
    let inputEl = document.getElementById("input-el").value
    let outputEl = document.getElementById("output-el")
    let answer = 0
    let i = 0
    while(i<inputEl.length){
        let letter = inputEl[i]
        if(letter == "a"){
            answer++
        }
        i++
    }
    outputEl.innerText = answer
}
function substringCounter(){
    let inputEl = document.getElementById("input-el").value
    let outputEl = document.getElementById("output-el")    
    let answer = 1
    let i = 0
    while(i<inputEl.length){
        let letter = inputEl[i]
        if(letter == " "){
            answer++
        }
        i++
    }
    outputEl.innerText = answer
}