window.onload = () => {

	$('#signup').click ( (e) => {
		e.preventDefault();
		$('#register-box').show();
		$('#auth-box').hide();

	});

	$('#register').on ('click', (e) => {
		e.preventDefault();
		const userName = $('#register_login').val();
		const userPassword = $('#register_password').val();
		const userPassConfirm = $('#register_confirm').val();

		if (userName !== ' ' && userPassword !== ' ' && userPassConfirm !== ' ') {
			if (userPassword === userPassConfirm) {
				localStorage.setItem('userName', userName);
				localStorage.setItem('userPassword', userPassword);
			}

			else alert('Wrong!');
		}
		$('#register-box').hide();
		$('#auth-box').show();
	});


	$('#auth').on ('click', (e) => {
		e.preventDefault();
		let userName = $('#auth_login').val();
		let userPassword = $('#auth_password').val();

		if (localStorage.userName !== userName || localStorage.userPassword !== userPassword) {
			alert('not right data');
		}
		else if (localStorage.userName === userName && localStorage.userPassword === userPassword) {
			$('form.logined').remove();
			$('header').append("<div class='logined'><h3 id='user-logined'>HI USER: " + userName + "</h3></div>");

			const formSidebar = document.forms.formSidebar;
			const sidebar = document.getElementById('sidebar-right');
			const allP = document.querySelectorAll('p');

			burger.onclick = function() {
			  sidebar.classList.toggle('hidden');
			}

			const getSize = formSidebar.elements.fontGetSize;
			getSize.oninput = setSize;

			function setSize() {
				const inputValue = Number(getSize.value);
					if(inputValue > 7 && inputValue < 25 && Number.isInteger(inputValue)) {
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

			/*set background color for all teg <p>*/
			setColor = function() {
				if (this.checked) {
					for(let i = 0; i < allP.length; i++) {
					allP[i].setAttribute("style", "background-color: " + this.value + ';');
					}
				}
				else {
					for(let i = 0; i < allP.length; i++) {
					allP[i].setAttribute("style", "background-color: inherit;" );
					}
				}
			}

			formSidebar.elements.red.onclick = setColor;
			formSidebar.elements.green.onclick =setColor;
			formSidebar.elements.blue.onclick =setColor;
			formSidebar.elements.yellow.onclick =setColor;
			formSidebar.elements.purple.onclick =setColor;

			const fontFamily = formSidebar.elements.fontSetFamily;
			fontFamily.onchange = setFont;

			function setFont() {
				let fontF = fontFamily.value;
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
				}

				for(let i = 0; i < allP.length; i++) {
					allP[i].setAttribute("style", "font-family: " + myFont + ';');
				}
			}

			$('#dellLastP').on ('click', () => {
			  const lastp = document.querySelector('p:last-child');
			  if(lastp) {
			    lastp.remove();
			  }
			});
		}

		else {
			alert('You must be register!');
		}

		userName = '';
		userPassword = '';
	});
}
