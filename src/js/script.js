   document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
    "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez. - Thomas Edison",
    "O mistério gera curiosidade e a curiosidade é a base do desejo humano para compreender. - Neil Armstrong",
    "Na vida, não existe nada a temer, mas a entender. - Marie Curie",
    "O que sabemos é uma gota; o que ignoramos é um oceano. - Isaac Newton",
    "Os ideais que iluminaram o meu caminho são a bondade, a beleza e a verdade. - Albert Einstein"
    // Adicione quantas frases desejar
    ];

    // Escolha uma frase aleatória
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Atualize o texto da frase no elemento
    document.getElementById('quote-text').textContent = randomQuote;
  });