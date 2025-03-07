let amigos = [];
let amigosRestantes = []; //Lista temporária para continuar o sorteio sem repetição até todos serem sorteados

function adicionarAmigo() { //Lista de participantes
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); //Remove espaços extras no início e no fim do input

    if (!nomeAmigo) {
        alert("Digite o nome do amigo");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nomeAmigo);
    amigosRestantes.push(nomeAmigo); //Mantém a sincronização para evitar que inicie antes do primeiro sorteio.
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista(); //Limpa e atualiza a lista
}


function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    //Se todos os amigos foram sorteados, limpa a lista e avisa ao usuário
    if (amigosRestantes.length === 0) {
        if (amigos.length === 0) {
            alert("Nenhum amigo na lista! Adicione nomes antes de sortear.");
            return;
        }

        resultado.innerHTML = "⚠️ Todos já foram sorteados! O jogo foi reiniciado para um novo sorteio.";

        //Limpa a lista de amigos e amigos restantes
        amigos = [];
        amigosRestantes = [];
        atualizarLista(); //Atualiza a lista na tela
        return;
    }

    //Sorteia um nome e remove da lista de amigos restantes
    let indexSorteado = Math.floor(Math.random() * amigosRestantes.length);
    let sorteado = amigosRestantes.splice(indexSorteado, 1)[0];

    resultado.innerHTML = `🎉 O amigo sorteado é: ${sorteado}`;

    atualizarLista();
}

