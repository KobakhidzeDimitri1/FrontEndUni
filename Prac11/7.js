let rangeStartPosition = document.querySelector(".range-background").getBoundingClientRect().x
let rangeButton = document.getElementById("range-button") 
rangeButton.addEventListener("drag",e =>{
    if(rangeButton.offsetLeft <= 300 && rangeButton.offsetLeft >=0){
        rangeButton.style.left = e.clientX - rangeStartPosition + "px"
    }
})

console.log(rangeStartPosition)
























