function generate(){
    let outputEl = document.getElementById("output-el")
    // let outputEl = document.getElementById("output-div")

    let minLetter = parseInt(document.getElementById("letermin-el").value)
    let maxLetter = parseInt(document.getElementById("letermax-el").value)
    let minWord = parseInt(document.getElementById("parmin-el").value)
    let maxWord = parseInt(document.getElementById("parmax-el").value)
    let paragraphCount = parseInt(document.getElementById("parcount-el").value)
    let lettersString = "abcdefghijklmnopqrstuvwxyz"
    let htmlCode = ``
    let count1 = 0
    let count2 = 0
    let count3 = 0
    while(count1 < paragraphCount){
        htmlCode += `<p>`
        let wordCount = Math.floor(Math.random() * (maxWord - minWord) + minWord)
        count2 = 0
        while(count2 < wordCount){
            let letterCount = Math.floor(Math.random() * (maxLetter - minLetter) + minLetter)
            count3 = 0
            while(count3 < letterCount){
                let randomIndex = Math.floor(Math.random() * (26 - 1) + 1);
                htmlCode += `${lettersString[randomIndex]}`
                count3++
            }
            htmlCode += ` `
            count2++
        }
        htmlCode += `</p>`
        count1++
    }
    outputEl.innerHTML = htmlCode

}


