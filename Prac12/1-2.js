

document.getElementById("facebook").addEventListener("click",() => window.open("https://www.facebook.com/", '_blank'))
document.getElementById("twitter").addEventListener("click",() => window.open("https://twitter.com/?lang=en", '_blank'))
document.getElementById("google").addEventListener("click",() => window.open("https://www.google.com/", '_blank'))
document.querySelector(".div-1").addEventListener("mouseenter",changePics)
document.querySelector(".div-2").addEventListener("mouseenter",changePics)
document.querySelector(".div-3").addEventListener("mouseenter",changePics)
document.querySelector(".div-4").addEventListener("mouseenter",changePics)


function changePics(){
    let mainElPictuer = document.getElementById("main-pic")
    let mainElText = document.getElementById("main-text")
    let mainTextValue = mainElText.textContent
    let currentPictureEl = this.querySelector(".pic-div")
    let currentTextEl = this.querySelector(".text-div")
    let currentTextValue = currentTextEl.textContent
    let curElbackground = window.getComputedStyle(currentPictureEl).backgroundImage
    let mainElbackground = window.getComputedStyle(mainElPictuer).backgroundImage
    currentPictureEl.style.backgroundImage = mainElbackground
    mainElPictuer.style.backgroundImage = curElbackground
    mainElText.textContent = currentTextValue
    currentTextEl.textContent = mainTextValue
}