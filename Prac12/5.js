

function playGame(){
    let playerMoney = parseInt(document.getElementById("player-el").textContent)
    let count = 0
    let countSeven = 0
    while(count<5){
        let number = Math.floor(Math.random() * 10)
        document.getElementById(`div-${count}`).innerText = number
        count++
        if(number == 7){
            countSeven++
        }
    }
    let roundAmount
    if(countSeven >0 && countSeven != 3){
        roundAmount = countSeven * 1
    }else if(countSeven === 3){
        roundAmount = 100
    }else if(countSeven === 0){
        roundAmount = -0.5
    }
    playerMoney += roundAmount
    document.getElementById("player-el").innerText = playerMoney


}