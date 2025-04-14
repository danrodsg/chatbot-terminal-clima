// chatbot.js

const readline = require('readline');
const getResponse = require('./response');
const getWeather = require('./weather');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function handleInput(input) {
    const lower = input.toLowerCase().trim();

    if (lower === 'sair') {
        rl.close();
        console.log('Bot: Tchau! Até a próxima!');
        return;
    }

    if (lower.startsWith('clima ')) {
        const city = input.split(' ').slice(1).join(' ');
        try {
            const weather = await getWeather(city);
            console.log(`Bot: ${weather}`);
        } catch (error) {
            console.log('Bot: Não consegui obter a previsão do tempo. Verifique o nome da cidade e tente novamente.');
        }
    } else {
        const response = getResponse(input);
        console.log(`Bot: ${response}`);
    }

    startChat();
}

function startChat() {
    rl.question('Você: ', handleInput);
}

console.log('Bem-vindo ao ChatBot de Clima🤖! Digite "sair" para encerrar a conversa.');
console.log('Digite "clima [cidade]" para saber a previsão.');

startChat();
