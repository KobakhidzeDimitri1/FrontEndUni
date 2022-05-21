function callOperator(x){
    let inputEl = parseFloat(document.getElementById("input-el").value)
    let outputEl = document.getElementById("output-el")
    if(x == 0){
        let answer = Math.round(inputEl)
        outputEl.innerText = answer
    }
    else if(x == 1){
        let answer = Math.ceil(inputEl)
        outputEl.innerText = answer
    }
    else if(x == 2){
        let answer = Math.floor(inputEl)
        outputEl.innerText = answer
    }
}
