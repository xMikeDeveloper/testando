// Lista de mensagens
const mensagens = [
  "Como um padrao de mensagem de aniversario, espero que vc conquiste td oq vc quer, q aconteça tudo de bom pra tu e enfim, uma ótima vida pra vc 💓🌺",
  "Por mais que a gente se conhece n tem muito tempo, eu já te achei incrivel ✨, e n deixe outras pessoas discordarem isso de vc",
  "Eu n posso deixar de citar que eu gostei da sua risada né, logo no primeiro dia eu tava morrendo de rir junto KAKAKSAS adorei vc, incluindo sua risada e né... seu surto Huehueueheue",
  "Adoro passar o tempo com tu, seja jogando, conversando ou até através de uma tela. Escutar sua voz, rir junto contigo... tudo isso torna o dia melhor",
  "Mesmo com pouco tempo, eu diria que vc já se tornou algm importante pra mim. Parece que cada conversa, cada risada, cada momento, só confirma o quanto eu te achei incrivel ❤️"
];

let indiceAtual = 0; // Índice da mensagem atual

function alterarMensagem() {
  const mensagemElemento = document.getElementById("mensagem");

  // Atualiza o conteúdo com a mensagem atual
  mensagemElemento.textContent = mensagens[indiceAtual];

  // Incrementa o índice para a próxima mensagem
  indiceAtual++;

  // Reseta o índice se chegar ao fim da lista
  if (indiceAtual >= mensagens.length) {
    indiceAtual = 0;
  }
}
