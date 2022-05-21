function generate(){
    let outputEl = document.getElementById("output-el")
    htmlCode = ``
    let picUrlArray = ["./photos/1.png","./photos/2.png","./photos/3.png","./photos/4.png","./photos/5.png","./photos/6.png","./photos/7.png","./photos/8.png","./photos/9.png","./photos/10.png",]
    let randomDate = Math.floor(Math.random() * 29 + 1)
    let randomPicUrl = picUrlArray[Math.floor(Math.random() * 10)]
    htmlCode += `${randomDate} <img src=${randomPicUrl} alt="">`
    outputEl.innerHTML = htmlCode
}