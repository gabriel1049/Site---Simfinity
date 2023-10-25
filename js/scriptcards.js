// Cards
let cardEstadosunidos = document.getElementById('cardimagemusa');
let cardEuropa = document.getElementById('cardimagemeuropa');
let cardMundial = document.getElementById('cardimagemmundial');
let sectionCardsUsa = document.getElementById('sectioncardsusa');

// Variável para rastrear o histórico de estados e seções
let history = ['card-all'];

// Função para atualizar o estado
function setCurrentState(current) {
  history.push(current);
}

// Função para voltar ao estado anterior
function goBack() {
  if (history.length > 1) {
    history.pop(); // Remove o estado atual do histórico
    return history[history.length - 1]; // Retorna o último estado no histórico
  }
  return 'card-all'; // Se não houver histórico, retorna o estado padrão
}

// Função de esconder e aparecer o CHIP VIRTUAL OU CHIP FÍSICO
let cardsAll = document.getElementsByClassName('card-all');

cardEstadosunidos.addEventListener("click", function(){
  setCurrentState('cardimagemusa'); // Define o estado atual
  for (let card of cardsAll) {
    card.style.display = 'none';
  }
  sectionCardsUsa.style.display = 'flex';
});


function showSection(sectionToShow) {
  const sections = document.querySelectorAll('.text_layout_estadosunidos');
  for (let section of sections) {
    section.style.display = 'none';
  }
  sectionToShow.style.display = 'flex';
}

// Mapeamento de botões para as respectivas seções
const buttonToSectionMap = {
  'buttonsetediasusa1': 'list_options_setedias_usa1',
  'buttondezdiasusa1': 'list_options_dezdias_usa1',
  'buttondozediasusa1': 'list_options_dozedias_usa1',
  'buttonquinzediasusa1': 'list_options_quinzedias_usa1',
  'buttonvintediasusa1': 'list_options_vintedias_usa1',
  'buttontrintadiasusa1': 'list_options_trintadias_usa1'
};

 // Adicionar eventos aos botões
 for (let buttonId in buttonToSectionMap) {
    const button = document.getElementById(buttonId);
    const sectionId = buttonToSectionMap[buttonId];

    button.addEventListener('click', function () {
        setCurrentState(sectionId); // Define o estado atual
        showSection(document.getElementById(sectionId));
    });
  }



