const color = document.querySelectorAll('.ball');
const text = document.querySelector('#rgb-color');
const container = document.querySelector('div');

// Requisito 4:
const colors = ['rgb(241, 109, 153)', 'rgb(240, 231, 142)', 'rgb(177, 240, 140)', 'rgb(140, 233, 240)', 'rgb(243, 185, 76)', 'rgb(243, 87, 235)'];
const nameColors = ['(241, 109, 153)', '(240, 231, 142)', '(177, 240, 140)', '(140, 233, 240)', '(243, 185, 76)', '(243, 87, 235)'];

// Escolhendo o nome das cores:

function pickNameColor() {
  const randomColor = Math.floor(Math.random() * nameColors.length);
  const newColor = nameColors[randomColor];
  return newColor;
}
// Escolhendo a cor das bolas:

function pickColor() {
  const randomColor = Math.floor(Math.random() * colors.length);
  const newColor = colors[randomColor];
  return newColor;
}
window.onload = function teste() {
  text.innerText = pickNameColor();
  for (const i of color) {
    i.style.backgroundColor = pickColor();
    const comparacao = 'rgb' + pickNameColor();
    if (comparacao == i.style.backgroundColor) {
      i.id = 'answer';
    }
  }
};

// Requisito 5:

const msg = document.createElement('p');
msg.style.fontWeight = 'bold';
container.append(msg);
msg.innerText = 'Escolha uma cor';
msg.style.fontSize = '25px';

function check(event) {
  if (event.target.id === 'answer') {
    msg.innerText = 'Acertou!';
  } else {
    msg.innerText = 'Errou! Tente novamente!';
  }
}

for (const i of color) {
  i.addEventListener('click', check);
}

// Requisito 6:

const button = document.querySelector('button');

function resetGame() {

  text.innerText = pickNameColor();
  msg.innerText = 'Escolha uma cor';
  for (const i of color) {
    i.style.backgroundColor = pickColor();
    i.removeAttribute('id');
    const comparacao = 'rgb' + pickNameColor();
    if (comparacao === i.style.backgroundColor) {
      i.id = 'answer';
    }
  }
}
button.addEventListener('click', resetGame);

// Requisito 7:

const score = document.querySelector('#score');
let placar = 0;
function changeScore() {
  if (msg.innerText === 'Acertou!') {
    placar += 3;
  }
  return placar;
};

score.innerText = changeScore();
