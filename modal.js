let modalDiv = document.querySelector('#modal');
let musica = new Audio('audio/music1.mp3');
let botaoMusica = document.querySelector('#music-play');
let onOff = 0;
let textoMostrar = document.querySelector('#texto-mostrar');


if (localStorage.getItem('undertale') == 'true'){
musica = new Audio('audio/megalovania.mp3');
}
if (localStorage.getItem('pokemon') == 'true'){
musica = new Audio('audio/pokemon.mp3');
}
function tocarMusica()
{
if(onOff == 0){
musica.play();
musica.sound = .25;
onOff = 1;
}
else{
musica.pause();
onOff = 0;
}
}
botaoMusica.addEventListener('click',tocarMusica);
function alertar(textoExibido){
	textoMostrar.innerHTML = textoExibido;
	modalDiv.style.top = 0;
	setTimeout(Voltar, 2000);
}
function Voltar(){
	textoMostrar.innerHTML = null;
	modalDiv.style.top = -800+'px';
}
