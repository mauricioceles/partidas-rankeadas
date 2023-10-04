function calculaSaldo(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

let vitoriasHerois = [15,25,60,90,100,105,150]
let derrotasHerois = [6,7,25,30,15,10,29]
let numVitorias
let numDerrotas
let saldoVitorias
let nivelHeroi
let i = 0


while(i < 7){
    numVitorias = vitoriasHerois[i]
    numDerrotas = derrotasHerois[i]
    saldoVitorias = calculaSaldo(numVitorias, numDerrotas)

    if(saldoVitorias < 10){
        nivelHeroi = "Ferro"
        console.log ("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelHeroi)      
    }else if(saldoVitorias > 10 && saldoVitorias <= 20){
        nivelHeroi = "Bronze"
        console.log ("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelHeroi) 
    }else if(saldoVitorias > 20 && saldoVitorias <= 50){
        nivelHeroi = "Prata"
        console.log ("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelHeroi) 
    }else if(saldoVitorias > 50 && saldoVitorias <= 80){
        nivelHeroi = "Ouro"
        console.log ("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelHeroi) 
    }else if(saldoVitorias > 80 && saldoVitorias <= 90){
        nivelHeroi = "Diamante"
        console.log ("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelHeroi) 
    }else if(saldoVitorias > 90 && saldoVitorias <= 100){
        nivelHeroi = "Lendário"
        console.log ("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelHeroi) 
    }else if(saldoVitorias > 100){
        nivelHeroi = "Imortal"
        console.log ("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelHeroi) 
    }
   
    i++
}