let buttons = document.querySelectorAll('button');
let criador = document.querySelector('#criador');
buttons[0].addEventListener('click',comprarBetamon);
buttons[1].addEventListener('click',comprarGabumon);
buttons[2].addEventListener('click',comprarNovosDigi);
buttons[3].addEventListener('click',comprarNovosDigiUltra);
buttons[4].addEventListener('click',comprarNovosDigiSete);
buttons[6].addEventListener('click',moduloComprar);
function comprarBetamon(){
  let moedasAtuais = localStorage.getItem('coins');
  moedasAtuais = parseInt(moedasAtuais,10);

  if (moedasAtuais >= 1000) {
    localStorage.setItem('buyBetamon',true);
    alertar('Voce comprou Betamon , inicie um novo jogo para registrar')
    localStorage.setItem('coins',moedasAtuais-1000);
  }
  else {
    alertar('Voce Nao possui moedas suficientes !');
  }
}

function comprarGabumon(){
  let moedasAtuais = localStorage.getItem('coins');
  moedasAtuais = parseInt(moedasAtuais,10);

  if (moedasAtuais >= 2500) {
    localStorage.setItem('buyGabumon',true);
    localStorage.setItem('coins',moedasAtuais-2500);
    alertar('Voce comprou Gabumon , inicie um novo jogo para registrar');
  }
  else {
    alertar('Voce Nao possui moedas suficientes !');
  }
}
function comprarNovosDigi(){
	let moedasAtuais = localStorage.getItem('coins');
  moedasAtuais = parseInt(moedasAtuais,10);
if(moedasAtuais >= 3000){
  for(let i = 0;i<pacoteDigimons.length;i++){
	  digimons.push(pacoteDigimons[i]);
  }
    localStorage.setItem('coins',moedasAtuais-3000);
  alertar('Seu pacote foi comprado , A Batalha!');
  salvarDigimonsInimigo();
  localStorage.setItem('comprarDigimon',true);
  buttons[2].remove();
}

else{
	alertar('Voce nao possui Moedas suficientes');
}
}
function comprarNovosDigiUltra(){
	let moedasAtuais = localStorage.getItem('coins');
  moedasAtuais = parseInt(moedasAtuais,10);
if(moedasAtuais >= 5000){
  for(let i = 0;i<pacoteDigimons.length;i++){
	  digimons.push(pacoteUltraDigimons[i]);
  }
   localStorage.setItem('coins',moedasAtuais-5000);
  alertar('Seu pacote foi comprado , A Batalha!');
  salvarDigimonsInimigo();
  localStorage.setItem('comprarDigimonUltra',true);
  buttons[3].remove();
}


else{
	alertar('Voce nao possui Moedas suficientes');
}
}

function carregarModulo(){
  if(localStorage.getItem('buyModulo')=='true'){
    criador.style.display = 'block'
    buttons[3].style.display = 'none';
  }
  else {
    criador.style.display = 'none'
  }
  if(localStorage.getItem('comprarDigimon') == 'true'){
	  buttons[2].remove();
  }
  if(localStorage.getItem('pacoteSeteDemon') == 'true'){
	  buttons[3].remove();
  }
   if(localStorage.getItem('comprarDigimonUltra') == 'true'){
	  buttons[4].remove();
  }
  else {
    buttons[4].style.display = 'block';
  }
}
function comprarNovosDigiSete(){
	let moedasAtuais = localStorage.getItem('coins');
  moedasAtuais = parseInt(moedasAtuais,10);
if(moedasAtuais >= 8000){
  for(let i = 0;i<pacoteSeteDemon.length;i++){
	  digimons.push(pacoteSeteDemon[i]);
  }
   localStorage.setItem('coins',moedasAtuais-8000);
  alertar('Seu pacote foi comprado , A Batalha!');
  salvarDigimonsInimigo();
  localStorage.setItem('pacoteSeteDemon',true);
  buttons[4].remove();
}
else{
	alertar('Voce nao possui Moedas suficientes');
}
}
function moduloComprar(){
  let moedasAtuais = localStorage.getItem('coins');
  moedasAtuais = parseInt(moedasAtuais,10);

  if (moedasAtuais >= 10000) {
    localStorage.setItem('buyModulo',true);
    alertar('Voce comprou Modulo Yggdrazil , Desfrute-o');
    carregarModulo();
    localStorage.setItem('coins',moedasAtuais-10000) 
  }
  else {
    alertar('Voce Nao possui moedas suficientes !');
  }
}

carregarModulo();
