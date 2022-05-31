document.addEventListener('keydown',e =>{
    let movingEl = document.getElementById("moving-el")
    if(e.key === "ArrowRight"){
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
    }else if(e.key === "ArrowLeft"){
        let pos = movingEl.offsetLeft
        let id = setInterval(move1,10)
        function move1(){
            if(pos <= 0){
                clearInterval(id)
            }else{
                pos-=5
                movingEl.style.left = pos + "px"
            }
        }   
    }else if(e.key === "ArrowDown"){
        let pos = movingEl.offsetTop
        let id = setInterval(move1,10)
        function move1(){
            if(pos >= 500){
                clearInterval(id)
            }else{
                pos+=5
                movingEl.style.top = pos + "px"
            }
        }   
    }else if(e.key === "ArrowUp"){
        let pos = movingEl.offsetTop
        let id = setInterval(move1,10)
        function move1(){
            if(pos <= 0){
                clearInterval(id)
            }else{
                pos-=5
                movingEl.style.top = pos + "px"
            }
        }   
    }
})






















