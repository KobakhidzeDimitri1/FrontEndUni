function fillFoods(){
    let foodAllDivs = document.querySelectorAll(".food-x")
    let suplAllDivs = document.querySelectorAll(".suplements-x")

    for(let i = 1;i <=foodAllDivs.length;i++){
        if(i<=suplAllDivs.length){
            suplAllDivs[i-1].style.background = `url(./images/food/suplements/${i}.png)`
            suplAllDivs[i-1].style.backgroundSize = 'cover'
            suplAllDivs[i-1].style.backgroundPosition = 'center'
        }
        foodAllDivs[i-1].style.background = `url(./images/food/foods/${i}.png)`
        foodAllDivs[i-1].style.backgroundSize = 'cover'
        foodAllDivs[i-1].style.backgroundPosition = 'center'
    }
}
fillFoods()
