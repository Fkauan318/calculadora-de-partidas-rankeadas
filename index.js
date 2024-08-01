let lobby = "Bem vindo ao lobby "
let jogadores = "KauanzadaX"
 console.log(lobby + jogadores)

  console.log("seu número de derrotas será subtraido pela suas vitorias para obter um rank")

 let vitorias = 0
let derrotas = 0

while (vitorias < 1){
   console.log("seu total de vitorias é: 45")
   vitorias++
}

while (derrotas < 1){
   console.log("seu total de derrotaas é: 15")
   derrotas++
}

pontosFinal(45, 15)

function pontosFinal (numA, numB){
   let pontoFinal = numA - numB
   console.log("seu número de vitorias final é : " + pontoFinal)
}

let rank = "prata"

switch(rank){

   case "ferro":
    console.log("O Herói tem de saldo de 30 vitorias e seu rank é ferro ")
    break
    
   case "bronze":
    console.log("O Herói tem de saldo de 30 vitorias e seu rank é bronze ")
    break

   case "prata":
    console.log("O Herói tem de saldo de 30 vitorias e seu rank é prata ")
    break

   case "ouro":
    console.log("O Herói tem de saldo de 30 vitorias e seu rank é ouro ")
    break

   case "diamante":
    console.log("O Herói tem de saldo de 30 vitorias e seu rank é diamante ")
    break

   case "lendário":
    console.log("O Herói tem de saldo de 30 vitorias e seu rank é lendario  ")
    break

   case "imortal":
    console.log("O Herói tem de saldo de 30 vitorias e seu rank é imortal ")
    break
}