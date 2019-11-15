let containerVida = document.querySelector('#vida');
let containerFome = document.querySelector('#fome');
let containerXP = document.querySelector("#xp");
let digimonMain = document.querySelector('#digi');
let pMoedas = document.querySelector('#coins');
let moedas = localStorage.getItem('coins');
moedas = parseInt(moedas,10);
let food = localStorage.getItem('food');
food = parseInt(food,10);
let digiescolha;
let nickname;
let nomedigimon = document.querySelector('#nomedigimon');
let pComida = document.querySelector('#food');
let icone = document.querySelectorAll('.icone');
let b = 0;
let i = 0;
let comprarComidaBT = document.querySelector('#foodBuy');
let alimentarBT = document.querySelector('#feed');
let n_vida = 19;
let eatAudio = new Audio('audio/eat.wav');
let contFome = 19;
comprarComidaBT.addEventListener('click',comprarComida);
alimentarBT.addEventListener('click',alimentar);
function criarBarras(){
while(i<n_vida){
let barraCriada = document.createElement('div');
barraCriada.classList.add("life-bar");
containerVida.appendChild(barraCriada);
i++;
}
i=0;
while(i<n_vida){
let barraCriada = document.createElement('div');
barraCriada.classList.add("hungry-bar");
containerFome.appendChild(barraCriada);
i++;
}
i=0;
while(i<n_vida){
let barraCriada = document.createElement('div');
barraCriada.classList.add("xp-bar");
containerXP.appendChild(barraCriada);
i++;
}
}
criarBarras();
function fome(){
let fomeBarra = document.querySelectorAll('.hungry-bar');
fomeBarra[fomeBarra.length-1-b].style.backgroundColor = "red";
contFome--;
b++

if(b == 19){
	alertar('Game Over (Causa Fome)');
	gameOver();
}
}

setInterval(fome,10000);
function carregarDigimon (){

  digiescolha = localStorage.getItem('digichoice');
  nickname = localStorage.getItem('nickname');
  nomedigimon.innerHTML=nickname;
  if (digiescolha == '1') {
    digimonMain.src="sprite/normal.gif"
  }
  if (digiescolha == '2') {
    digimonMain.src="sprite/Demidevimon.gif"
  }
  if (digiescolha == '3') {
    digimonMain.src="sprite/ttentomon.gif"
  }
  if (digiescolha == '4') {
    digimonMain.src="sprite/gabumon.gif"
  }
  if (digiescolha == '5') {
    digimonMain.src="sprite/betamon.gif"
  }
	if (localStorage.getItem('undertale') == 'true') {
    digimonMain.src="sprite/frisk.png"
  }
}

function escreverMoedas(){
		pMoedas.innerHTML = 'DigiCoins : ' + moedas;
    localStorage.setItem('coins',moedas);
}
function escreverComida(){
		pComida.innerHTML = 'DigiSnacks: ' + food;
    localStorage.setItem('food',food);
}
function comprarComida(){
	if(moedas>=50){
		moedas -= 50;
		food++;
		escreverMoedas();
		escreverComida();
	}
	else {
		alertar('Dinheiro Insuficiente!');
	}
}
function alimentar (){
	let fomeBarra = document.querySelectorAll('.hungry-bar');
	if(food >= 1){
	food -=1;
	localStorage.setItem('food',food);
	escreverComida();
	for(let l=0;l<fomeBarra.length;l++){
		fomeBarra[l].style.backgroundColor='yellow';
	}
	for(let l=0;l<fomeBarra.length;l++){
		let vidaBarra = document.querySelectorAll('.life-bar');
		vidaBarra[l].style.backgroundColor='purple';
		ia = 0;
	}
	eatAudio.play();
	contFome = 19;
	b=0;
	}
	else{
		alertar('Comida Insuficiente!');
	}
}
function gameOver(){
	alertar('Seu digimon foi mandando para o vale inicial , recomece');
	localStorage.setItem('coins',0);
	localStorage.setItem('food',0);
	window.location.href = "start.html";
}
escreverMoedas();
escreverComida();
