function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function generateSquare(){
    let containerEl = document.querySelector(".container")
    let id = setInterval(fillContainer,200)
    let count = 1
    function fillContainer(){
        if(count == 30){
            clearInterval(id)
        }else{
            containerEl.innerHTML += `<div style="background-color:${randomColor()} ;"></div>`
            count++
        }
    }
}

generateSquare()

