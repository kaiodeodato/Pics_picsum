var ArrayFotos = []

function Trocar(){
    // vai de 8 até 1084
    for(let i= 10; i < 1084; i++){
    // let idRandom = Math.ceil(Math.random()*800 + 100)
    let image = document.createElement("img") 
    let boxFotos = document.getElementById("box__fotos")

    image.class = "image"
    image.src = `https://picsum.photos/id/${i}/700/450`

    ArrayFotos.push(`<a target="_blank" href=${image.src}><img class="image2" src="https://picsum.photos/id/${i}/700/450"></a>`)
    boxFotos.innerHTML = ArrayFotos.join(" ")


    console.log(ArrayFotos)
    }
}

Trocar()