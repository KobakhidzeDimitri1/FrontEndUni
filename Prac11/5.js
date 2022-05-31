let buttonDiv = document.querySelector(".button-div")
let doubleClickEl = document.getElementById("output-2")
buttonDiv.addEventListener("click",oneClick)
buttonDiv.addEventListener("dblclick",doubleClick)

function oneClick(){
    let oneClickEl = document.getElementById("output-1")
    oneClickEl.innerHTML += `<h2>One Click</h2>`
}

function doubleClick(){
    let oneClickEl = document.getElementById("output-2")
    oneClickEl.innerHTML += `<h2>Double Click</h2>`
}