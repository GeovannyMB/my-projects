let h2 = document.getElementById("h2")

function colocaMaiusculo(){
    this.innerHTML = this.innerHTML.toUpperCase()
}

function colocaMinusculo(){
    this.innerHTML = 'Filmes'
}

h2.onmouseover = colocaMaiusculo
h2.onmouseout = colocaMinusculo
