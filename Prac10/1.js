function moveRight(){
    let movingEl = document.getElementById("moving-el")
    let pos = movingEl.offsetLeft
    let id = setInterval(move1,10)
    function move1(){
        if(pos >= 1100){
            clearInterval(id)
        }else{
            pos+=5
            movingEl.style.left = pos + "px"
        }
    }  
}
function moveDown(){
    let movingEl = document.getElementById("moving-el")
    let pos = movingEl.offsetTop
    let id = setInterval(move2,10)
    function move2(){
        if(pos == 500){
            clearInterval(id)
        }else{
            pos+=5
            movingEl.style.top = pos + "px"
        }
    }  
}
function moveUp(){
    let movingEl = document.getElementById("moving-el")
    let pos = movingEl.offsetTop
    let id = setInterval(move3,10)
    function move3(){
        if(pos == 0){
            clearInterval(id)
        }else{
            pos-=5
            movingEl.style.top = pos + "px"
        }
    }  
}

function moveLeft(){
    let movingEl = document.getElementById("moving-el")
    let pos = movingEl.offsetLeft
    let id = setInterval(move3,10)
    function move3(){
        if(pos == 0){
            clearInterval(id)
        }else{
            pos-=5
            movingEl.style.left = pos + "px"
        }
    }  
}