let div = document.getElementById("div")

div.children[0].children[1].addEventListener("click", function(){
    div.children[0].children[0].innerHTML = 'Número sorteado: ' + Math.round(Math.random() *1000)
})

div.children[7].children[1].addEventListener("click", function(){
    div.children[7].children[0].innerHTML = 'Número sorteado: ' + Math.round(Math.random() *100)
})

div.children[14].children[1].addEventListener("click", function(){
    div.children[14].children[0].innerHTML = 'Número sorteado: ' + Math.round(Math.random() *10)
})
