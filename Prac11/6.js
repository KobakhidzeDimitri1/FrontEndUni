document.addEventListener('keydown',e =>{
    let movingEl = document.getElementById("moving-el")
    console.log(movingEl.offsetLeft,movingEl.offsetTop)
    if(e.key === "ArrowRight"){
        let pos = movingEl.offsetLeft
        if(pos >= 1170){
            pass
        }else{
            pos+=5
            movingEl.style.left = pos + "px"
        }  
    }else if(e.key === "ArrowLeft"){
        let pos = movingEl.offsetLeft
        if(pos <= 0){
            pass
        }else{
            pos-=10
            movingEl.style.left = pos + "px"
        } 
    }else if(e.key === "ArrowDown"){
        let pos = movingEl.offsetTop
        if(pos >= 570){
            clearInterval(id)
        }else{
            pos+=5
            movingEl.style.top = pos + "px"
        } 
    }else if(e.key === "ArrowUp"){
        let pos = movingEl.offsetTop
        if(pos <= 0){
            clearInterval(id)
        }else{
            pos-=5
            movingEl.style.top = pos + "px"
        }
          
    }
})

























