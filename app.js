/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
    console.log('O botão foi acionado')
}*/

// Desafio hora da prática

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';*/

/*function verificarChute() {
    console.log('O botão foi clicado');
}*/

/*function verificarChute() {
    alert('Eu amo JS.')
}*/

/*function verificarChute() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}*/

/*function verificarChute() {
    let numero1 = Number(prompt('DIGITE O PRIMEIRO NÚMERO INTERO DA SOMA'));
    let numero2 = Number(prompt('DIGITE O SEGUNDO NÚMERO INTERO DA SOMA'));
    let resultado = numero1 + numero2;

    alert(`O resultado da soma é ${resultado}`);
}*/
// ---------------------------------------------

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

/*let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}*/

// Desafio hora da prática 2

/*function exibirOla() {
    console.log("Olá, mundo!");
}
exibirOla();*/

/*function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}`);
}
exibirOlaNome("Leo");*/

/*function calcularDobro(numero) {
    return numero * 2;
}

let resultadoDobro = calcularDobro(6);
console.log(resultadoDobro);*/

/*function media(a, b, c){
    return (a + b + c) / 3;
}

let resultadoMedia = media(6, 7 ,5);
console.log(resultadoMedia);*/

/*function oxiQuemEMaior(a, b) {
    return a > b ? a : b;
}

let maiorNumero = oxiQuemEMaior(11, 9);
console.log(maiorNumero);*/

/*function multiplicacao(numero) { 
    return numero * numero;
}

let multDosNumeros = multiplicacao(2);
console.log(multDosNumeros);*/
// ---------------------------------------------

/*let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `o número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `o número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reinciar').setAttribute('desabled', true);
}*/

// Calculadora de Média e Situação do Aluno
/*function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
}
  function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}*/
//----------------------------------------------------

// Desafio hora da prática 3
/*function calculaIMC(altura, peso) {
    let imc = peso / (altura * altura);
}*/

/*function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial
}

//Uso
let numero = 6;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);*/

/*function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 5.28;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

//Uso
let valorEmDolar = 20;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivale a R$ ${valorEmReais}`);*/

/*function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);*/

/*function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);*/

/*function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);*/
// ---------------------------------------------


/*let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `o número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `o número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reinciar').setAttribute('desabled', true);
}*/

// Manipulação de Listas em JS - Você foi encarregado (a) de criar um pequeno programa para gerenciar uma lista de compras. 
// O programa deve permitir que o usuário adicione itens à lista e, em seguida, exiba o conteúdo da lista na tela. 
// Além disso, a pessoa usuária deve ser capaz de ver um item específico da lista, digitando o índice do item desejado.

/*let listaCompras = [];

listaCompras.push("Maçã");
listaCompras.push("Arroz");
listaCompras.push("Leite");
listaCompras.push("Pão");
listaCompras.push("Carne");
//Removendo o ultimo da lista
listaCompras.pop();
console.log(listaCompras);*/
// ---------------------------------------------

// Desafio hora da prática 4
/*let listaGenerica = [];*/

/*let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(linguagensDeProgramacao.length);*/

/*let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
linguagensDeProgramacao.push("Java", "Ruby", "GoLang")
console.log(linguagensDeProgramacao.length);
console.log(linguagensDeProgramacao);*/

/*let nomes = ["Aline", "Pablo", "Manoel"];
console.log(nomes[0]);*/

/*let nomes = ["Aline", "Pablo", "Manoel"];
console.log(nomes[1]);*/

/*let nomes = ["Aline", "Pablo", "Manoel"];
console.log(nomes[2]);*/
// ---------------------------------------------


let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `o número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `o número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('desabled', true);
}
