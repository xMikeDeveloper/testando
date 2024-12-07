const cake = document.getElementById("cake");
const scoreDisplay = document.getElementById("score");
const messageDisplay = document.getElementById("message");
const gameArea = document.getElementById("game-area");
const endGameLink = document.getElementById("end-game");

let score = 0;

// Dados para rastreamento de cliques
let clickData = {
  flores: 0,
  pokemons: 0,
  ursos: 0,
  bolo: 0,
  balao: 0,
};

// Mapeamento de categorias de itens
const itemCategories = {
  flores: ["coracao-flor", "coracao-margarida", "tulipas", "tulipas2"],
  pokemons: ["eevee", "eevee2", "lucario", "lucario-chave", "snorlax1", "snorlax2", "umbreon", "umbreon2"],
  ursos: ["ursinho-co-balao", "ursinhos", "urso"],
  bolo: ["bolo"],
  balao: ["balao"],
};

// Lista de imagens para os bolos
const cakeImages = [
  "./imagens/balao.png",
  "./imagens/bolo.png",
  "./imagens/coracao-flor.png",
  "./imagens/coracao-margarida.png",
  "./imagens/coracao.png",
  "./imagens/eevee.png",
  "./imagens/eevee2.png",
  "./imagens/lucario-chave.png",
  "./imagens/lucario.png",
  "./imagens/snorlax1.png",
  "./imagens/snorlax2.png",
  "./imagens/tulipas.png",
  "./imagens/tulipas2.png",
  "./imagens/ursinho-co-balao.png",
  "./imagens/ursinhos.png",
  "./imagens/urso.png",
  "./imagens/umbreon.png",
  "./imagens/umbreon2.png",
];

// Mensagens que aparecem ao atingir certas pontuações
const messages = [
  "Vc está indo muito mal! (Brincadeira)",
  "Vai ficando mais rapido em",
  "Já pensou em virar gamer?",
  "Princesa dos cliques 👑",
  "Podia tocar em mim tbm ne",
  "Falta de criatividade bateu",
  "Começando a complicar",
  "Ainda tá? Oloco",
  "Acho que a partir do 50 deve complicar",
  "Ne possivel nao",
  "Impossivel",
];

// Função para mostrar mensagens com base na pontuação
function showMessage(points) {
  if (points % 5 === 0) {
    const index = Math.floor(points / 5) - 1;
    if (index < messages.length) {
      messageDisplay.textContent = messages[index];
      messageDisplay.style.display = "block";
      messageDisplay.classList.remove("fade-out");

      // Adiciona a animação fade-in
      messageDisplay.classList.add("fade-in");

      // Esconde a mensagem após 3 segundos com fade-out
      setTimeout(() => {
        messageDisplay.classList.remove("fade-in");
        messageDisplay.classList.add("fade-out");
      }, 3000);
    }
  }
}

let usedImages = [];
let intervalTime = 2000; // Inicia com 2 segundos
let intervalId;

// Função para posicionar o bolo aleatoriamente dentro da seção do jogo
function moveCake() {
  const maxX = gameArea.offsetWidth - cake.offsetWidth;
  const maxY = gameArea.offsetHeight - cake.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  cake.style.left = `${randomX}px`;
  cake.style.top = `${randomY}px`;
}

// Função para atualizar a imagem do bolo
function changeCakeImage() {
  if (usedImages.length === cakeImages.length) {
    usedImages = [];
  }

  const remainingImages = cakeImages.filter(image => !usedImages.includes(image));
  const randomIndex = Math.floor(Math.random() * remainingImages.length);
  const selectedImage = remainingImages[randomIndex];

  usedImages.push(selectedImage);
  cake.style.background = `url(${selectedImage}) no-repeat center/cover`;

  // Atualiza os dados de cliques
  const imageName = selectedImage.split("/").pop().split(".")[0];
  for (const [category, items] of Object.entries(itemCategories)) {
    if (items.includes(imageName)) {
      clickData[category]++;
      break;
    }
  }
}

// Função para atualizar o intervalo conforme os pontos
function updateSpeed() {
  // A cada 5 pontos, reduz o intervalo
  if (score % 5 === 0 && intervalTime > 50) {
    intervalTime -= 150; // Reduz o intervalo para acelerar a velocidade
    clearInterval(intervalId); // Limpa o intervalo atual
    intervalId = setInterval(gameLoop, intervalTime); // Define o novo intervalo
  }
}

// Função principal para executar a lógica do jogo
function gameLoop() {
  moveCake();
  changeCakeImage();
}

// Atualizar a pontuação e bolo ao clicar
cake.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Pontos: ${score}`;
  showMessage(score);
  moveCake();
  changeCakeImage();
  updateSpeed(); // Chama a função para atualizar a velocidade com base na pontuação
});

// Salvar dados no localStorage ao encerrar o jogo
endGameLink.addEventListener("click", () => {
  localStorage.setItem("gameSummary", JSON.stringify({ score, clickData }));
});

// Inicializar o jogo
intervalId = setInterval(gameLoop, intervalTime); // Começa o jogo com o intervalo inicial
moveCake();
changeCakeImage();



/*// Função principal para executar a lógica do jogo
function gameLoop() {
  moveCake();
  changeCakeImage();
}

// Define o intervalo de atualização
setInterval(gameLoop, 1000); // Troca a cada 1 segundo


// Atualizar a pontuação e bolo ao clicar
cake.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Pontos: ${score}`;
  showMessage(score);
  moveCake();
  changeCakeImage();
});

// Salvar dados no localStorage ao encerrar o jogo
endGameLink.addEventListener("click", () => {
  localStorage.setItem("gameSummary", JSON.stringify({ score, clickData }));
});

// Inicializar o jogo
moveCake();
changeCakeImage();
*/