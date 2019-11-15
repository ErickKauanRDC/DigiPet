///////////////CRIAR NOVOS DIGIMONS(MODULO IGGDRAZIL)
let imgDigimon;
let bttCriar = document.querySelector('#criar');
let NewDigimon;
bttCriar.addEventListener("click",novoDigimon);
function salvarDigimonsInimigo(){
	inimigos = JSON.stringify(digimons);
	localStorage.setItem('inimigos', inimigos);
}
function novoDigimon (){
NewDigimon = {
	nome: document.querySelector('#nomeNovo').value,
	vida: document.querySelector('#modulo-vida').value,
	recompensa: parseInt(document.querySelector('#modulo-recompensa').value,10),
	dano: document.querySelector('#modulo-dano').value,
	source : imgDigimon,

};
 digimons.push(NewDigimon);
	alertar('Seu digimon ' + NewDigimon.nome + ' foi criado com sucesso pelo modulo Yggdrazil');
 salvarDigimonsInimigo();
}
function previewFile() {
  let file    = document.querySelector('input[type=file]').files[0];
  let reader  = new FileReader();

  reader.addEventListener("load", function () {
   imgDigimon = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
