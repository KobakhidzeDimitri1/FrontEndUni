function callFunction(){
    let parentTag = document.getElementById("input-el").value
    addChild(parentTag)
}


function addChild(parent){
    let outputEl = document.getElementById("output-el")
    htmlCode = ``
    htmlCode += `<${parent}>BTU FRONTEND 123 </${parent}>`
    outputEl.innerHTML = htmlCode
}