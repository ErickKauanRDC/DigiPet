let red = document.querySelector("#red");
let black = document.querySelector("#black");
let roda = document.querySelector('#whell');
let coins = parseInt(localStorage.getItem('coins'));
let coinsDisplay = document.querySelector('#digicoins');
coinsDisplay.innerText = coins;
red.addEventListener('click',function(){
	rodar("red");
});
black.addEventListener('click',function(){
	rodar("black");
});

function rodar(cor){
	let aposta = document.querySelector('#valor').value;
	if(aposta>coins){
		return -1;
	}
	else{
	coins = coins - aposta;
	coinsDisplay.innerText = coins;
	let position = Math.floor(Math.random() * 36000);
	

	roda.style.transform = "rotate(" + position + "deg )";
	let positionReal = position%360;
	if(positionReal <= 90 || positionReal >= 270){
		if(cor == "black"){
			
			aposta = aposta*2;
			coins = coins+aposta;
			
		}
		else{
			
		}
	}
	else{
		if(cor == "red"){
			aposta = aposta*2;
			coins = coins+aposta;
		}
		else{
			
		}
	}
	setTimeout(function(){
		coinsDisplay.innerText = coins;
		localStorage.setItem('coins',coins);
	},10005);
  	
  }
}