//Principais
let buttonDigivice = document.querySelectorAll('.button-digivice');
let digiEvolutionbutton = document.querySelector('#digivolve');
let digiChoicer = localStorage.getItem('digichoice');
let digivolvido = localStorage.getItem('digivolvido');
let inter = 1;
let counter = 0;
let hitAudio = new Audio('audio/pound.wav');
let upAudio = new Audio('audio/up.mp3');
let g = 0;
digiChoicer = parseInt('digichoice',10);
//Easter Eggs
let undertale = localStorage.getItem('undertale');
let pokemons = localStorage.getItem('pokemon');
//Items Variaveis
let itemsEncontrados = [];
let nItems = 0;
let inventarioSlots = document.querySelectorAll('.item-box');


let digimons = [ {
		nome: 'nullmon',
		vida: 0,
		source :"",
		dano: 0,
		recompensa: 0,

	 },
	 {
		nome: 'Apocalymon',
		vida: 12,
		source :"sprite/apocalymon.gif",
		dano: 4,
		recompensa: 70,

	 },
	 {
		nome: 'Piedmon',
		vida: 10,
		source:"sprite/piedmon.gif",
		dano: 3,
		recompensa: 30,

	 },
	 {
		nome: 'Keramon',
		vida: 5,
		source:"sprite/keramon.gif",
		dano:1,
		recompensa: 10,

	 },
	 {
		nome: 'Raremon',
		vida: 7,
		source:"sprite/raremon.gif",
		dano: 2,
		recompensa: 20,

	 },
	 {
		nome: 'Diaboromon',
		vida: 10,
		source:"sprite/diaboromon.gif",
		dano: 3,
		recompensa: 50,

	 },
	 {
		nome: 'Kuwagamon',
		vida: 8,
		source:"sprite/kuwagamon.gif",
		dano: 3,
		recompensa: 40,

	 },
	 {
		nome: 'Sukamon',
		vida: 4,
		source:"sprite/sukamon.gif",
		dano:2,
		recompensa: 20,
	 }
	 ];
	 let pacotePokemons = [{
	 		nome: 'Arcanine',
	 		vida: 20,
	 		source:"sprite/notDigimons/Arcanine.gif",
	 		dano:5,
	 		recompensa: 200,
	 	 },
	    {
	 		 nome: 'Venussaur',
	   		vida: 30,
	   		source:"sprite/notDigimons/Venussaur.gif",
	   		dano:8,
	   		recompensa: 500,
	    },
	 	 {
	 	 	nome: 'Gengar',
	 	 	 vida: 10,
	 	 	 source:"sprite/notDigimons/Gengar.gif",
	 	 	 dano:5,
	 	 	 recompensa: 250,
	 	 },
	 	 {
	 		 nome: 'Scyther',
	   		vida: 10,
	   		source:"sprite/notDigimons/scyther.gif",
	   		dano:5,
	   		recompensa: 100,
	    },
	 	 {
	 		 nome: 'Pikachu',
	   		vida: 30,
	   		source:"sprite/notDigimons/pikachu.gif",
	   		dano:25,
	   		recompensa: 500,
	 	 }
	  ];
		let undertales = [ {
				nome: 'nullmon',
				vida: 0,
				source :"",
				dano: 0,
				recompensa: 0,

			 },
			 {
				nome: 'Papyrus',
				vida: 12,
				source :"sprite/notDigimons/papyrus.gif",
				dano: 4,
				recompensa: 70,

			 },
			 {
				nome: 'Napstablook',
				vida: 10,
				source:"sprite/notDigimons/Napstablook.gif",
				dano: 3,
				recompensa: 30,

			 },
			 {
				nome: 'Flowey',
				vida: 5,
					source:"sprite/notDigimons/Flowey.gif",
				dano:1,
				recompensa: 10,

			 },
			 {
				nome: 'Sans',
				vida: 30,
				source:"sprite/notDigimons/Sans.gif",
				dano: 50,
				recompensa: 2000,

			 },
			 {
				nome: 'MettatonEX',
				vida: 10,
				source:"sprite/notDigimons/MettatonEX.gif",
				dano: 3,
				recompensa: 50,

			 },
			 {
				nome: 'Muffet',
				vida: 8,
				source:"sprite/notDigimons/Muffy.gif",
				dano: 3,
				recompensa: 40,

			 },
			 {
				nome: 'Asriel Dremmur',
				vida: 4,
				source:"sprite/notDigimons/AsrielDremmur.gif",
				dano:2,
				recompensa: 20,
			 }
			 ];
let pacoteDigimons = [{

		nome: 'AeroVeedramon',
		vida: 25,
		source:"sprite/AeroVeedramon.gif",
		dano:4,
		recompensa: 200,
	 },
	 {
		nome: 'Andromon',
		vida: 20,
		source:"sprite/Andromon.gif",
		dano:5,
		recompensa: 300,
	 },
	 {
		nome: 'SkullGreymon',
		vida: 25,
		source:"sprite/SkullGreymon.gif",
		dano:5,
		recompensa: 500,
	 },{
		 nome: 'Blossomon',
		vida: 18,
		source:"sprite/Blossomon.gif",
		dano:4,
		recompensa: 150,
	 },
	 {
		  nome: 'Infermon',
		vida: 16,
		source:"sprite/Infermon.gif",
		dano:20,
		recompensa: 250,
	 },
	 {
		  nome: 'Deputymon',
		vida: 20,
		source:"sprite/Deputymon.gif",
		dano:3,
		recompensa: 150,
	 }];
let pacoteUltraDigimons = [{

		nome: 'Armageddemon',
		vida: 45,
		source:"sprite/Armageddemon.gif",
		dano:8,
		recompensa: 800,
	 },
	 {
		nome: 'Kimeramon',
		vida: 50,
		source:"sprite/Kimeramon.gif",
		dano:6,
		recompensa: 900,
	 },
	 {
		nome: 'MachineDramon',
		vida: 55,
		source:"sprite/MachineDramon.gif",
		dano:6,
		recompensa: 900,
	 } ];
let pacoteSeteDemon = [{
		nome: 'Leviamon',
		vida: 105,
		source:"sprite/demon_lords/Levimon.gif",
		dano:18,
		recompensa: 2000,
	 },
{
		nome: 'Barbamon',
		vida: 85,
		source:"sprite/demon_lords/Barbamon.gif",
		dano:12,
		recompensa: 1400,
	 },
{
		nome: 'Lucemon Chaos Mode',
		vida: 155,
		source:"sprite/demon_lords/Lucemon.gif",
		dano:20,
		recompensa: 2500,
	 },
{
		nome: 'Belphemon Rage Mode',
		vida: 100,
		source:"sprite/demon_lords/Lucemon.gif",
		dano:38,
		recompensa: 2000,
	 },
{
		nome: 'Lilithmon',
		vida: 80,
		source:"sprite/demon_lords/Lilithmon.gif",
		dano:13,
		recompensa: 1500,
	 },
{
		nome: 'Daemon',
		vida: 100,
		source:"sprite/demon_lords/Daemon.gif",
		dano:15,
		recompensa: 1700,
	 },
];
let digimonsMain = [{
	nome: 'Patamon',
	nomeEvolution : 'Pegasusmon',
	EvolutionSource: 'sprite/pegasusmon.gif'
},
{
	nome: 'Demidevimon',
	nomeEvolution : 'Devimon',
	EvolutionSource: 'sprite/devimon.gif'
},
{
	nome: 'Tentomon',
	nomeEvolution : 'HerculesKabuterion',
	EvolutionSource: 'sprite/kabuterimon.gif'
},
{
	nome: 'Gabumon',
	nomeEvolution : 'Weregarurumon',
	EvolutionSource: 'sprite/weregarurumon.gif'
},
{
	nome: 'Betamon',
	nomeEvolution : 'Seadramon',
	EvolutionSource: 'sprite/seadramon.gif'
},
{
	nome: 'Frisk',
	nomeEvolution : 'Chara',
	EvolutionSource: 'sprite/chara.png'
},
];
let x;
let xpLVL=0;
let digievoluido = 0;
let bonusDano = 0;
let baseDano;
let ia=0;
let vidaDigimon;
let vidaSeuDigimon = document.querySelectorAll('.life-bar');
let danoDigimon=0;
let botaoFormarItem = document.querySelector('#formar');
let inimigoDisplay = document.querySelector('#inimigo');
inimigoDisplay.addEventListener('click',fightDigimon);
buttonDigivice[0].addEventListener('click',findDigimon);

function findDigimon (){
	x = Math.floor(Math.random() * digimons.length)+1;
	window.alertar("Voce encontrou um "+ digimons[x].nome);
	inimigoDisplay.src = digimons[x].source;
	vidaDigimon = digimons[x].vida;
	danoDigimon = digimons[x].dano;
	inter = 1;

}

function fightDigimon (e){
	let digichoice = localStorage.getItem('digichoice');
	let danoAtualItem = parseInt(localStorage.getItem('danoItem'));
	e = document.createElement('div');
	e.setAttribute('class','atack');
	if(digichoice == '1'){
		e.style.backgroundColor ='#48DEF9';
		baseDano = 0;
	}
	if(digichoice == '2'){
		e.style.backgroundColor ='purple';
		baseDano = 0;
	}
	if(digichoice == '3'){
		e.style.backgroundColor ='yellow';
		baseDano = 0;
	}
	if(digichoice == '4'){
		e.style.backgroundColor ='blue';
		baseDano = 5;
	}
	if(digichoice == '5'){
		e.style.backgroundColor ='#20ECAB ';
		baseDano = 2;
	}
	if(g>=18 && digievoluido == 1){
	g = 0;
	}
	document.body.appendChild(e);
	e.style.top = event.pageY+'px';
	e.style.left = event.pageX+'px';
	hitAudio.play();
	vidaDigimon -= 1+bonusDano+baseDano+danoAtualItem;
	if(vidaDigimon <= 0){
		counter = 0;
		inimigoDisplay.src='sprite/nothing.png';
		vidaDigimon = 0;
		danoDigimon = 0;
		moedas += parseInt(digimons[x].recompensa,10);
		x = 0;
		let itemsorte = Math.floor(Math.random()*10);
		if(itemsorte > 8 && counter == 0){
			counter = 1;
			encontrouItem();
		}
		escreverMoedas();
		xpCriar();
		inter = 0;
	}
}
function encontrouItem(){
	let itemEncontrado = Math.floor(Math.random()*4);
	if(nItems == 3){
		liberarItem();
	}
	while(itemsEncontrados.indexOf(itemEncontrado) != -1){
		itemEncontrado = Math.floor(Math.random()*4);
	}
	inventarioSlots[nItems].src='sprite/item' + itemEncontrado + '.png';
	itemsEncontrados.push(itemEncontrado);
	nItems ++;
	localStorage.setItem('nItems',nItems);
}
function liberarItem(){
	botaoFormarItem.style.display = "block";
	botaoFormarItem.addEventListener('click',forjarItem);
}
function forjarItem(){
	let danoAtual = localStorage.getItem('danoItem');
	danoAtual = parseInt(danoAtual,10);
	danoAtual += 2;
	localStorage.setItem('danoItem',danoAtual);
	nItems = 0;
	for(let a=0;a<4;a++){
		inventarioSlots[a].src='sprite/nothing.png';
	}
	itemsEncontrados = [];
	botaoFormarItem.style.display = "none";
	botaoFormarItem.removeEventListener('click',forjarItem);
	localStorage.setItem('nItems',0);
	alertar("Voce forjou um item e recebeu +2 de ataque !");
}
function carregarItems(){
	let items = parseInt(localStorage.getItem('nItems'));
	for(let i = 0 ; i < items ; i++){
		encontrouItem();
	}
}
function xpCriar(){
	if(inter != 0){
	let xpBarra = document.querySelectorAll('.xp-bar');
	if(g == 0 ){xpBarra[0].style.backgroundColor = "green";}
xpBarra[g+1].style.backgroundColor = "green";
g++;
	}
}

digiEvolutionbutton.addEventListener('click',digiEvolution);
carregarDigimon();
function digiEvolution(){
	if(digivolvido == 'true' && g < 18){
	g = 18;
	digiEvolution();
	}
	digiEscolha = parseInt(localStorage.getItem('digichoice'))-1;
	if(g>=18 && digievoluido == 0){
	localStorage.setItem('digivolvido',true);
	digievoluido = 1;
	if (undertale == 'true'){
		alertar('Frisk aceitou a parte genocida da sua alma e se tornou Chara');
		digimonMain.src = 'sprite/chara.png';
		bonusDano = 10;
		upAudio.play();
	}
	else{
	alertar('Seu '+ digimonsMain[digiEscolha].nome + ' Digievoluiu para '+ digimonsMain[digiEscolha].nomeEvolution);
	digimonMain.src = digimonsMain[digiEscolha].EvolutionSource;
	bonusDano = 5;
	upAudio.play();
	}
}
	else if(digievoluido == 1){
	alertar(digimonsMain[digiEscolha].nomeEvolution + " é sua forma maxima");
	if (undertale == 'true') {
		alertar('Voce nao pode se tornar pior do que isso...');
	}
	}
	else{
	alertar('Voce nao possui XP suficiente');
	}
}

function enemyAtack(){
let vidaBarra = document.querySelectorAll('.life-bar');
if(danoDigimon!= 0){
vidaBarra[vidaBarra.length-1-ia].style.backgroundColor = "red";
ia++;
}
if(ia >= n_vida){
	alertar('Game Over ,(Causa Morte em Batalha)');
	gameOver();
}
}
setInterval(enemyAtack,1000-danoDigimon*5);
function carregarDigimonInimigo(){

if(localStorage.getItem('inimigos')!=null){
	digimons = JSON.parse(localStorage.getItem('inimigos'));
}
if(pokemons == 'true'){
	for(let i = 0;i<pacotePokemons.length;i++){
		digimons.push(pacotePokemons[i]);
	}
}
if(undertale == 'true'){
	document.querySelector('.tela').classList.add('undertale');
	digimons = undertales;
}
}
carregarDigimonInimigo();
carregarItems();
digiEvolution();

