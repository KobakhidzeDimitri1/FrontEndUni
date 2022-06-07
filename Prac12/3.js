function fillContainer(x){
    let count = 1
    document.getElementById("container2").innerHTML = ""
    while (count <= 11){
        let newDiv = document.createElement("div")
        newDiv.style.backgroundImage = `url('./images2/${x}/${count}.png')`;
        document.getElementById("container2").appendChild(newDiv)
        count++
    }
}

fillContainer("Landscape")
