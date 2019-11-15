let radioButtons = document.querySelector('input');
let digiEggs = document.querySelectorAll('.egg');
let name = document.querySelector('#name');
let type = document.querySelector('#type');
let btsbmit = document.querySelector('#submit');
let inputname = document.querySelector('#digi-name');
let digichoice = 1;
let beta = document.querySelector('#beta');
let gabu = document.querySelector('#gabu');
let apelido;
let i;
btsbmit.addEventListener('click',sendlocal)
for(i=0;i<digiEggs.length;i++){
digiEggs[i].addEventListener('mouseover',mostrarDescricao);
digiEggs[i].addEventListener('click',selecionarDigimon);
}
function mostrarDescricao (e){

  e = event.currentTarget;
  name.innerHTML = e.dataset.name;
  type.innerHTML = e.dataset.type;
  type.style.textAlign="left";
  des.innerHTML = e.dataset.des;

}
function selecionarDigimon (e){
  let gabumonComprado = localStorage.getItem('buyGabumon');
  let betamonComprado = localStorage.getItem('buyBetamon');
  e = event.currentTarget;
  if(e.dataset.name == "Patamon"){
    digichoice = 1;
  }
  if(e.dataset.name == "Demidevimon"){
    digichoice = 2;
  }
  if(e.dataset.name == "Tentomon"){
    digichoice = 3;
  }
  if(e.dataset.name == "Gabumon"){
    if(gabumonComprado == 'true'){
    digichoice = 4;
  }
  else {
    alertar('Voce nao adiquiriu o digimon Gabumon, Va ate os extras e o compre')
  }
  }
  if(e.dataset.name == "Betamon"){
    if(betamonComprado == 'true'){
    digichoice = 5;
  }
  else {
    alertar('Voce nao adiquiriu o digimon Betamon, Va ate os extras e o compre')
  }
  }

}
function sendlocal(){
  apelido = inputname.value;
  if(apelido == 'pokemon'){
    localStorage.setItem('pokemon',true);
  }
  if(apelido == 'frisk'){
    localStorage.setItem('undertale',true);
  }
  else {
    localStorage.setItem('undertale',false);
  }
  if(apelido != 'pokemon'){
    localStorage.setItem('pokemon',false);
  }
  localStorage.setItem('digichoice',digichoice);
  localStorage.setItem('nickname',apelido);
  localStorage.setItem('coins',100);
  localStorage.setItem('food',5);
  localStorage.setItem('danoItem',0);
  if(apelido != ""){
  alertar('Seu digimon '+apelido+' foi registrado');
  localStorage.setItem('digivolvido',false);
  window.location.href = "index.html";
}
else {
  alertar('Digite um nome!');
}
}
function compradoroun () {
  let gabumonComprado = localStorage.getItem('buyGabumon');
  let betamonComprado = localStorage.getItem('buyBetamon');
  if(gabumonComprado == 'true'){
    gabu.classList.remove('blocked');
  }
  if(betamonComprado == 'true'){
    beta.classList.remove('blocked');
  }
}
compradoroun();
