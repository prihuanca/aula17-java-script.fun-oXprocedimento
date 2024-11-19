/*
PROCEDIMENTO
Descrição: Exibe uma mensagem fixa
Nome: mostraAlerta
Parâmetro: void
Retorno: void
void-> significa que não volta o valor

function mostraAlerta() {
        alert("Não é que isso funciona mesmo!!!");
}
function mostraAlerta1(msg) {
        alert("banoite "+msg);
}
 function mensagem_com_parametro_return(msg1){
        return("Você digitou " +msg1);
}
*/
function soma(n1,n2){
        var n1,n2,soma;
        n1=parseInt(n1);
        n2=parseInt(n2);
        soma= n1+n2;
        return("resultado: "+soma);
}
