function calc(){
    rowValue = parseInt(document.getElementById("num1-input").value)
    columnValue = parseInt(document.getElementById("num2-input").value)
    photoValue = parseInt(document.getElementById("num3-input").value)
    answerEl = document.getElementById("answer")
    f16(rowValue,columnValue,photoValue)

}


function f16(x,y,z){
    answerEl = document.getElementById("answer")
    countColumns = 0  //suratebistvis datvla
    htmlCode = `<table>`
    for(i = 0;i<x;i++){
        htmlCode += `<tr>`
        for(k = 0;k<y;k++){
            countColumns++
            if(countColumns <= z){
                htmlCode += `<td><img src="./pics/${countColumns}.png" alt=""></img></td>`
            }else{
                htmlCode += `<td></td>`
            }
        }
        htmlCode += `</tr>`
    }
    htmlCode = htmlCode + `</table>`
    answerEl.innerHTML = htmlCode
}

