
let contador = 0;
var listaProdutos = [ 'lapis', 'caderno', 'tesoura' ]
var produto = 'caderno';

while(contador < 3){

    if (listaProdutos[contador] == produto){
        console.log("produto existe");
        break;
    } else {
        console.log("produto não existe");
    }

    contador += 1;
}

