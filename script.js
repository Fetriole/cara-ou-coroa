// Variáveis globais para armazenar o lado escolhido e contagem de vitórias/derrotas por jogador
let chosenSide = null; // Armazena o lado escolhido pelo usuário ('cara' ou 'coroa')
let players = {}; // Armazena as informações de cada jogador

// Função para o usuário escolher o lado da moeda ('cara' ou 'coroa')
function chooseSide(side) {
    const playerName = document.getElementById('playerName').value.trim();
    if (playerName === '') {
        alert('Por favor, insira o nome do jogador.');
        return;
    }

    chosenSide = side; // Atribui o lado escolhido à variável chosenSide
    document.getElementById('playButton').removeAttribute('disabled'); // Habilita o botão de jogar

    // Inicializa o jogador se ainda não estiver registrado
    if (!players[playerName]) {
        players[playerName] = { wins: 0, losses: 0, choices: [] };
    }
}

// Função principal para simular o lançamento da moeda
function flipCoin() {
    const playerName = document.getElementById('playerName').value.trim();
    const player = players[playerName];

    const resultDiv = document.getElementById('result');    // Elemento div para exibir o resultado
    const historyDiv = document.getElementById('history');  // Elemento div para exibir o histórico
    const coinImage = document.getElementById('coinImage'); // Imagem da moeda para animação
    const winsSpan = document.getElementById('wins');       // Elemento span para exibir número de vitórias
    const lossesSpan = document.getElementById('losses');   // Elemento span para exibir número de derrotas

    // Desabilita o botão de jogar durante a animação e lançamento da moeda
    document.getElementById('playButton').setAttribute('disabled', true);

    // Animação de rotação da moeda (simulando o lançamento)
    coinImage.style.transition = 'transform 1s';
    coinImage.style.transform = 'rotateY(1800deg)';

    // Gera um resultado aleatório após 1 segundo (simulando o tempo de lançamento)
    setTimeout(() => {
        // Gera um número aleatório entre 0 e 1
        const randomNumber = Math.random();

        // Determina o resultado com base no número aleatório
        const result = randomNumber < 0.5 ? 'cara' : 'coroa';

        // Atualiza o histórico de jogadas do jogador
        player.choices.push(result);
        const historyEntry = document.createElement('div');
        historyEntry.textContent = `${playerName} escolheu ${chosenSide}, resultado: ${result}`;
        historyDiv.prepend(historyEntry); // Adiciona ao início do histórico de jogadas

        // Verifica o resultado e atualiza as estatísticas de vitórias e derrotas do jogador
        if (result === chosenSide) {
            resultDiv.textContent = 'Você ganhou!'; // Exibe mensagem de vitória
            player.wins++; // Incrementa o contador de vitórias
            winsSpan.textContent = player.wins; // Atualiza o número de vitórias exibido
        } else {
            resultDiv.textContent = 'Você perdeu!'; // Exibe mensagem de derrota
            player.losses++; // Incrementa o contador de derrotas
            lossesSpan.textContent = player.losses; // Atualiza o número de derrotas exibido
        }

        // Reseta a escolha do lado e permite uma nova jogada
        chosenSide = null; // Reseta a escolha do lado para null
        coinImage.style.transform = 'rotateY(0)'; // Retorna a moeda à posição original
        document.getElementById('playButton').removeAttribute('disabled'); // Habilita o botão de jogar novamente
    }, 1000); // Espera 1 segundo (tempo de lançamento da moeda)
}
