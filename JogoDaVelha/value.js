var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarjogador('x');

function escolherquadrado(id){

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#0000ff';

    if (jogador === 'x'){
        jogador = 'o';
    }else{
        jogador = 'x';
        quadrado.style.color = '#ff0000';
    }

    mudarjogador(jogador);
    checkvencedor();
}

function mudarjogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

    jogadorSelecionado.style.fontSize = '25px';
    jogadorSelecionado.style.fontWeight = 'bold';
    jogadorSelecionado.style.color = '#0000ff';


    if(jogador === 'x'){
        jogadorSelecionado.style.color = '#0000ff';
    }else{
        jogadorSelecionado.style.color = '#ff0000';
    }
}

function checkvencedor(){
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');

    if (checarsequencia(quadrado1, quadrado2, quadrado3)){
        mudarCorQuadrado (quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checarsequencia(quadrado4, quadrado5, quadrado6)){
        mudarCorQuadrado (quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checarsequencia(quadrado7, quadrado8, quadrado9)){
        mudarCorQuadrado (quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checarsequencia(quadrado1, quadrado4, quadrado7)){
        mudarCorQuadrado (quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checarsequencia(quadrado2, quadrado5, quadrado8)){
        mudarCorQuadrado (quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checarsequencia(quadrado3, quadrado6, quadrado9)){
        mudarCorQuadrado (quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checarsequencia(quadrado1, quadrado5, quadrado9)){
        mudarCorQuadrado (quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checarsequencia(quadrado3, quadrado5, quadrado7)){
        mudarCorQuadrado (quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }

}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
    vencedorSelecionado.style.fontSize = '25px';
    vencedorSelecionado.style.fontWeight = 'bold';

    if (vencedor === 'x'){
        vencedorSelecionado.style.color = '#0000ff';
    }else{
        vencedorSelecionado.style.color = '#ff0000';
    }

}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#32cd32';
    quadrado2.style.background = '#32cd32';
    quadrado3.style.background = '#32cd32';
}

function checarsequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }
    return eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarjogador ('x');
}