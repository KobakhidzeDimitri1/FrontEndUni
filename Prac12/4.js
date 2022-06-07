function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function fillContainer(){
    let count = 1
    document.querySelector(".container").innerHTML = ""
    while(count <=25){
        let newDiv = document.createElement("div")
        newDiv.style.backgroundColor = randomColor()
        document.querySelector(".container").appendChild(newDiv)
        count++
    }
}

setInterval(fillContainer,1000)