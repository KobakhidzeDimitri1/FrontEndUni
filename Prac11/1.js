document.addEventListener('keydown',e =>{
    let movingEl = document.getElementById("moving-el")
    if(e.key === "ArrowRight"){
        let pos = movingEl.offsetWidth
        let id = setInterval(move1,10)
        movingEl.style.backgroundColor = "#00ffff"
        function move1(){
            if(pos >= 1200){
                clearInterval(id)
            }else{
                pos+=5
                movingEl.style.width= pos + "px"
            }
        }          
    }else if(e.key === "ArrowLeft"){
        let pos = movingEl.offsetWidth
        let id = setInterval(move1,10)
        movingEl.style.backgroundColor = "red"
        function move1(){
            if(pos <= 100){
                clearInterval(id)
            }else{
                pos-=5
                movingEl.style.width= pos + "px"
            }
        }   
    }else if(e.key === "ArrowDown"){
        let pos = movingEl.offsetHeight
        let id = setInterval(move1,10)
        movingEl.style.backgroundColor = "#00ffff"
        function move1(){
            if(pos >= 600){
                clearInterval(id)
            }else{
                pos+=5
                movingEl.style.height= pos + "px"
            }
        }   
    }else if(e.key === "ArrowUp"){
        let pos = movingEl.offsetHeight
        let id = setInterval(move1,10)
        movingEl.style.backgroundColor = "#00ffff"
        function move1(){
            if(pos <= 100){
                clearInterval(id)
            }else{
                pos-=5
                movingEl.style.height= pos + "px"
            }
        }   
    }
})




















