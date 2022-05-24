
function moveRight(){
    let containerEl = document.querySelector(".container")
    let movingEl = document.getElementById("moving-el")
    let containerWidth = containerEl.offsetWidth
    let movingElWidth = movingEl.offsetWidth
    let startWidth = movingElWidth
    let addingWidth = (containerWidth - movingElWidth) / 100
    let id = setInterval(function widthRight(){
        if(movingElWidth >= containerWidth){
            clearInterval(id)
            moveLeft(movingElWidth,addingWidth,startWidth,movingEl)
        }else{
            movingElWidth += addingWidth
            movingEl.style.width = movingElWidth + 'px'
        }
    },40)
}
function moveLeft(movingElWidth,addingWidth,startWidth,movingEl){
    let id2 = setInterval(widthLeft,40)
    function widthLeft(){
        if(movingElWidth <= startWidth){
            clearInterval(id2)
            moveDown()
        }else{
            movingElWidth -= addingWidth
            movingEl.style.width = movingElWidth + 'px'
        }
    }
}
function moveDown(){
    let containerEl = document.querySelector(".container")
    let movingEl = document.getElementById("moving-el")
    let containerHeight = containerEl.offsetHeight
    let movingElHeight = movingEl.offsetHeight
    let startHeight = movingElHeight
    let addingHeight = (containerHeight - movingElHeight) / 100
    let id3 = setInterval(heightDown,50)
    function heightDown(){
        if(movingElHeight >= containerHeight){
            clearInterval(id3)
            moveUp(movingElHeight,addingHeight,startHeight,movingEl)
        }else{
            movingElHeight += addingHeight
            movingEl.style.height = movingElHeight + 'px'
        }
    }
}
function moveUp(movingElHeight,addingHeight,startHeight,movingEl){
    let id4 = setInterval(heightDown,50)
    function heightDown(){
        if(movingElHeight <= startHeight){
            clearInterval(id4)
            moveRight()
        }else{
            movingElHeight -= addingHeight
            movingEl.style.height = movingElHeight + 'px'
        }
    }
}
moveRight()


