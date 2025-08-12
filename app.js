//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = []

let tamanhoLista = 5; // variável que define a quantidade de nomes na lista

function adicionarAmigo(){
    if(listaAmigos.length == tamanhoLista){
        alert('Lista de amigos cheia!')
    }else{
        let nome = document.querySelector('input').value;
        listaAmigos.push(nome);
        document.getElementById('listaAmigos').textContent = "";
        for (let index = 0; index < listaAmigos.length; index++) {

            const lista = document.getElementById('listaAmigos');
            const element = listaAmigos[index];
            let novoItem = document.createElement('li'); 
            novoItem.textContent = element;
            lista.appendChild(novoItem);
        }
    }
    document.querySelector('input').value = "";
}

function sortearAmigo(){
    document.getElementById('resultado').textContent = "";
    let sorteio = parseInt(Math.random() * listaAmigos.length)
    let resultado = document.getElementById('resultado');
    let itemResult = document.createElement('li');
    itemResult.textContent = listaAmigos[sorteio];
    resultado.appendChild(itemResult)
    document.getElementById('listaAmigos').textContent = "";
}
