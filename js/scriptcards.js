let cardUsa;
let cardEuropa;
let cardMundial;

let sectionCardUsa;
let cardGlobal;

let btnVoltar;

let textLayout;

function start() {
  cardUsa = $("#card-imagem-usa");
  cardEuropa = $("#card-imagem-europa");
  cardMundial = $("#card-imagem-mundial");
  sectionCardUsa = $("#section-card-usa");
  cardGlobal = $("#card-global");
  textLayout = $("#text-layout");
  btnVoltar = $('#btn-voltar');

  cardUsa.click(() => {
    sectionCardUsa.show();
    cardGlobal.hide();
  });

  cardEuropa.click(() => {
    sectionCardUsa.show();
    cardGlobal.hide();
  });

  cardMundial.click(() => {
    sectionCardUsa.show();
    cardGlobal.hide();
  });
  
  padrao();
}

function voltarCardUsa() {
  sectionCardUsa.hide();
  cardGlobal.show();
  btnVoltar.prop("onclick", "voltarCardUsa");
}

function listOptions(id) {

  let opcao = $(`#opcao${id}`);

  textLayout.hide();
  opcao.show();
  btnVoltar.off("click").on("click", () => {
    textLayout.show();
    opcao.hide();
    padrao();
  });
}

function padrao() {
  btnVoltar.click(() => {
    sectionCardUsa.hide();
    cardGlobal.show();
  });
}
