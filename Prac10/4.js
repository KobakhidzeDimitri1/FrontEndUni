function randomPosition(){
    let movingEl = document.getElementById("moving-el")
    let containerEl = document.querySelector(".container")
    let containerWidth = containerEl.offsetWidth
    let containerHeight = containerEl.offsetHeight
    let movingElWidth = movingEl.offsetWidth
    let movingElHeight = movingEl.offsetHeight
    let color = "#00ffff"
    let border = "greenyellow 1px solid"
    let id = setInterval(randomAppear,1000)
    function randomAppear(){
        let randomX = Math.floor(Math.random() *(containerWidth-movingElWidth))
        let randomY = Math.floor(Math.random() *(containerHeight-movingElHeight))
        movingEl.style.backgroundColor = color
        movingEl.style.border = border
        movingEl.style.left = randomX + 'px'
        movingEl.style.top = randomY + 'px'
    }  
}

randomPosition()