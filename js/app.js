let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let nome = amigo.value.trim();

    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    // Normaliza para letras minúsculas para comparação
    const nomeNormalizado = nome.toLowerCase();

    // Verifica se algum nome já adicionado é igual (ignorando maiúsculas/minúsculas)
    const nomeJaExiste = amigos.some(n => n.toLowerCase() === nomeNormalizado);

    if (nomeJaExiste) {
        alert('Esse nome já foi adicionado!');
        amigo.value = '';
        return;
    }

    amigos.push(nome);

    if (lista.textContent == '') {
        lista.textContent = nome;
    } else {
        lista.textContent += ', ' + nome;
    }

    amigo.value = '';
}



function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para sortear!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // limpar antes de exibir

    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i];
        let amigoSorteado = (i == amigos.length - 1) ? amigos[0] : amigos[i + 1];
        sorteio.innerHTML += `${amigoAtual} → ${amigoSorteado}<br>`;
    }
    document.getElementById('nome-amigo').disabled = true;
}



function embaralha(lista) {

    for(let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista [indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').disabled = false;
}