function generate(){
    let outputEl = document.getElementById("output-el")
    htmlCode = ``
    let daysArray = ["ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"]
    let picUrlArray = ["./photos/1.png","./photos/2.png","./photos/3.png","./photos/4.png","./photos/5.png"]
    let randomDay = daysArray[Math.floor(Math.random() * 7)]
    let randomPicUrl = picUrlArray[Math.floor(Math.random() * 5)]
    htmlCode += `${randomDay} <img src=${randomPicUrl} alt="">`
    outputEl.innerHTML = htmlCode
}