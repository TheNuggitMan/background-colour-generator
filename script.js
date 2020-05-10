var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomBtn = document.getElementById('random');

function setGradient() {
  let css = document.querySelector('h3');
  body.style.background = 'linear-gradient(to right,' + color1.value + ', ' + color2.value + ')';
  css.textContent = body.style.background + ';';
}

function generateRandomHexCode() {
  var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 16)];
	}
	return color;
}

function randomiseColour() {
  color1.value = generateRandomHexCode();
  color2.value = generateRandomHexCode();
  setGradient();
}

// function setOwnColour(htmlEl) {
//   htmlEl.style.backgroundColor= color1.value;
// }

randomBtn.onclick = function setButtonColor() {
  random.style.backgroundColor = color1.value;
  random.style.color = color2.value;
}

body.addEventListener('onload', setGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", randomiseColour);
