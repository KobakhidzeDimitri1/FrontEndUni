function calc(){
    answerEl = document.getElementById("answer")
    tanxaEl = parseInt(document.getElementById("tanxa-el").value)
    procEl = parseInt(document.getElementById("proc-el").value)
    celiEl = parseInt(document.getElementById("celi-el").value)
    tanxaSave = tanxaEl
    celiSave = celiEl

    while (celiEl > 0){
        tanxaEl += tanxaEl * (procEl/100)
        celiEl--
    }
    answerEl.innerText = `${tanxaSave} ლარი ${celiSave} წელში გახდება ${tanxaEl} ლარი`
}



