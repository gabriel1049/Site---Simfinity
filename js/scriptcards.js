// Cards
let cardEstadosunidos = document.getElementById('cardimagemusa');
let cardEuropa = document.getElementById('cardimagemeuropa');
let cardMundial = document.getElementById('cardimagemmundial');
let sectionCardsUsa = document.getElementById('sectioncardsusa');


// Função de esconder e aparecer o CHIP VIRTUAL OU CHIP FÍSICO
let cardsAll = document.getElementsByClassName('card-all');

cardEstadosunidos.addEventListener("click", function(){
    for (let card of cardsAll) {
        card.style.display = 'none';
    }
    sectionCardsUsa.style.display = 'flex';
});


let voltarButton = document.getElementById('voltarbuttonsectionusa');

voltarButton.addEventListener("click", function(){
    sectionCardsUsa.style.display = 'none'; // Esconde a seção específica
    for (let card of cardsAll) {
        card.style.display = 'flex'; // Torna visível todos os elementos com a classe 'card-all'
    }
});