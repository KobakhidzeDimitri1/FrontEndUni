function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function callFunction(){
    let period = document.getElementById("input-el").value
    let count = document.getElementById("input-el2").value
    addChild(period,count)
}


function addChild(period,count){
    let outputEl = document.getElementById("output-el")
    outputEl.innerHTML = ``
    let id = setInterval(createCircle,period)
    let i = 0
    function createCircle(){
        if(i == count){
            clearInterval(id)
        }else{
            outputEl.innerHTML += `<div style = "background-color:${randomColor()};"</div>`
            i++
        }

    }

}