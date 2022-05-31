let containerEl = document.querySelector(".container")
let movingEl = document.getElementById("moving-el")
console.log(containerEl.getBoundingClientRect().x + containerEl.offsetWidth)
window.addEventListener("mousemove",e =>{ 
    let posX = e.clientX
    let posY = e.clientY
    if(((posX >containerEl.getBoundingClientRect().x
        ) &&(posX < (containerEl.getBoundingClientRect().x + containerEl.offsetWidth))) &&((posY>containerEl.getBoundingClientRect().y) &&(posY <(containerEl.getBoundingClientRect().y+containerEl.offsetHeight)))){
        movingEl.style.display = "Inherit"
        movingEl.style.left = posX + "px"
        movingEl.style.top = posY + "px"
    }else{
        movingEl.style.display = "None"
    }
    
})

























