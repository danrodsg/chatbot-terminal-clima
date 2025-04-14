//response.js

function getResponse(input) {
    const msg = input.trim().toLowerCase();
    
    if (msg.includes('oi') || msg.includes('olá')) {
        return 'Olá! Me diga uma cidade com: clima [cidade] ou me faça uma pergunta!';

    } else if (msg.includes('tudo bem')) {
        return 'Sim, tudo bem! Obrigado por perguntar!';

    } else if (msg.includes('qual seu nome')) {
        return 'Eu sou um ChatBot desenvolvido em NodeJS!🤖';

    } else if (msg.includes('ajuda')) {
        return 'Comandos disponíveis: oi, tudo bem, clima [cidade], sair.';

    } else if (msg ==='sair') {
        return 'Tchau! Até a próxima!🤖';

    } else {
        return  'Desculpe, não entendi. Digite "ajuda" para ver as opções.';       
    }
}
    
module.exports = getResponse;   
