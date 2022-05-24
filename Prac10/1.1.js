function callFunction(){
    let parentTag = document.getElementById("input-el").value
    let childContent = document.getElementById("input-el2").value
    addChild(parentTag,childContent)
}


function addChild(parent,child){
    let outputEl = document.getElementById("output-el")
    htmlCode = ``
    htmlCode += `<${parent}>${child}</${parent}>`
    outputEl.innerHTML = htmlCode
}