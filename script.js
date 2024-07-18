// Variáveis globais para armazenar o lado escolhido e contagem de vitórias/derrotas
let chosenSide = null; // Armazena o lado escolhido pelo usuário ('cara' ou 'coroa')
let wins = 0;           // Contador de vitórias
let losses = 0;         // Contador de derrotas

// Função para o usuário escolher o lado da moeda ('cara' ou 'coroa')
function chooseSide(side) {
    chosenSide = side; // Atribui o lado escolhido à variável chosenSide
    document.getElementById('playButton').removeAttribute('disabled'); // Habilita o botão de jogar
}

// Função principal para simular o lançamento da moeda
function flipCoin() {
    const resultDiv = document.getElementById('result');   // Elemento div para exibir o resultado
    const historyDiv = document.getElementById('history'); // Elemento div para exibir o histórico
    const coinImage = document.getElementById('coinImage'); // Imagem da moeda para animação
    const winsSpan = document.getElementById('wins');       // Elemento span para exibir número de vitórias
    const lossesSpan = document.getElementById('losses');   // Elemento span para exibir número de derrotas

    // Desabilita o botão de jogar durante a animação e lançamento da moeda
    document.getElementById('playButton').setAttribute('disabled', true);

    // Animação de rotação da moeda (simulando o lançamento)
    coinImage.style.transform = 'rotateY(180deg)';

    // Gera um resultado aleatório após 1 segundo (simulando o tempo de lançamento)
    setTimeout(() => {
        const result = Math.random() < 0.5 ? 'cara' : 'coroa'; // Gera 'cara' ou 'coroa' aleatoriamente

        // Atualiza o histórico de jogadas
        const historyEntry = document.createElement('div');
        historyEntry.textContent = result;
        historyDiv.prepend(historyEntry);  // Adiciona ao início do histórico de jogadas

        // Verifica o resultado e atualiza as estatísticas de vitórias e derrotas
        if (result === chosenSide) {
            resultDiv.textContent = 'Você ganhou!'; // Exibe mensagem de vitória
            wins++; // Incrementa o contador de vitórias
            winsSpan.textContent = wins; // Atualiza o número de vitórias exibido
        } else {
            resultDiv.textContent = 'Você perdeu!'; // Exibe mensagem de derrota
            losses++; // Incrementa o contador de derrotas
            lossesSpan.textContent = losses; // Atualiza o número de derrotas exibido
        }

        // Reseta a escolha do lado e permite uma nova jogada
        chosenSide = null; // Reseta a escolha do lado para null
        coinImage.style.transform = 'rotateY(0)'; // Retorna a moeda à posição original
        document.getElementById('playButton').removeAttribute('disabled'); // Habilita o botão de jogar novamente

    }, 1000); // Espera 1 segundo (tempo de lançamento da moeda)
}

