
const formSidebar = document.forms.formSidebar;
const sidebar = document.getElementById('sidebar-right');

burger.onclick = function() {
  sidebar.classList.toggle('hidden');
}

const getSize = formSidebar.elements.fontGetSize;
getSize.oninput = setSize;

function setSize() {
	const inputValue = Number(getSize.value);
	const allP = document.querySelectorAll('p');
		if(inputValue > 7 && inputValue < 25) {
			for(let i = 0; i < allP.length; i++) {
				allP[i].setAttribute('style', 'font-size: ' + inputValue + 'px;');
			}
		}
		else {
			for(let i = 0; i < allP.length; i++) {
				allP[i].setAttribute('style', 'font-size: inherit;');
			}
		}
}

const setRed = formSidebar.elements.red;
setRed.onclick = () => {
	const allP = document.querySelectorAll('p');
	if(setRed.checked) {
		for(let i = 0; i < allP.length; i++) {
		allP[i].setAttribute("style", "color: " + setRed.value + ';');
		}
	}
	else {
		for(let i = 0; i < allP.length; i++) {
			allP[i].setAttribute("style", "color: black;");
		}
	}
}

const setGreen = formSidebar.elements.green;
setGreen.onclick = () => {
	const allP = document.querySelectorAll('p');
	if(setGreen.checked) {
		for(let i = 0; i < allP.length; i++) {
		allP[i].setAttribute("style", "color: " + setGreen.value + ';');
		}
	}
	else {
		for(let i = 0; i < allP.length; i++) {
			allP[i].setAttribute("style", "color: black;");
		}
	}
}

const setBlue = formSidebar.elements.blue;
setBlue.onclick = () => {
	const allP = document.querySelectorAll('p');
	if(setBlue.checked) {
		for(let i = 0; i < allP.length; i++) {
		allP[i].setAttribute("style", "color: " + setBlue.value + ';');
		}
	}
	else {
		for(let i = 0; i < allP.length; i++) {
			allP[i].setAttribute("style", "color: black;");
		}
	}
}

const setYellow = formSidebar.elements.yellow;
setYellow.onclick = () => {
	const allP = document.querySelectorAll('p');
	if(setYellow.checked) {
		for(let i = 0; i < allP.length; i++) {
		allP[i].setAttribute("style", "color: " + setYellow.value + ';');
		}
	}
	else {
		for(let i = 0; i < allP.length; i++) {
			allP[i].setAttribute("style", "color: black;");
		}
	}
}

const setPurple = formSidebar.elements.purple;
setPurple.onclick = () => {
	const allP = document.querySelectorAll('p');
	if(setPurple.checked) {
		for(let i = 0; i < allP.length; i++) {
		allP[i].setAttribute("style", "color: " + setPurple.value + ';');
		}
	}
	else {
		for(let i = 0; i < allP.length; i++) {
			allP[i].setAttribute("style", "color: black;");
		}
	}
}


const fontFamily = formSidebar.elements.fontSetFamily;
fontFamily.onchange = setFont;

function setFont() {
	let fontF = fontFamily.value;
	const allP = document.querySelectorAll('p');
	let myFont = '';

	switch(fontF) {
		case 'Anton':
			myFont = fontF;
			break;

		case 'Lobster':
			myFont = fontF;
			break;

		case 'Pacifico':
			myFont = fontF;
			break;

		default: 
			myFont = 'Arial';
			break;
	}

	for(let i = 0; i < allP.length; i++) {
		allP[i].setAttribute("style", "font-family: " + myFont + ';');
	}
}

function delLastP() {
  const lastp = document.querySelector('p:last-child');
  if(lastp) {
    lastp.remove();
  }
}
