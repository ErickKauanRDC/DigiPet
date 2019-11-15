let sobreButton = document.querySelector('#sobre');
let sobreDiv = document.querySelector('.criadores');
let escondido = true;
sobreButton.addEventListener('click',function() {
  if (escondido) {
      sobreDiv.style.top = 0 + 'px';
      escondido = false;
  }
  else if (!escondido) {
      sobreDiv.style.top = -800 + 'px';
      escondido = true;
  }
})
