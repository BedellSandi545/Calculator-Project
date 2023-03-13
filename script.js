const keyboard = document.querySelector('.keyboard');
const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input');
const deleteBtn = document.querySelector('#delete');
const equals = document.querySelector('.equals');

let concat = '';

function clickKeys(e) {
	e.preventDefault();
	if (
		e.target.closest('.btn') &&
		!e.target.classList.contains('cancelall') &&
		!e.target.classList.contains('equals') &&
		!e.target.classList.contains('plusorminus')
	) {
		firstInput.value = e.target.dataset.value;
		concat += firstInput.value;
		firstInput.value = concat;
		parseInt(firstInput.value);
		const lastDigit = Number(firstInput.value.slice(-1));
		if (typeof lastDigit === 'number' && lastDigit <= 9) {
			parseInt(firstInput.value);
			secondInput.value = eval(firstInput.value);

			parseInt(secondInput.value);
		}
	}

	if (e.target.classList.contains('plusorminus')) {
		let str;
		Number(firstInput.value);
		if (firstInput.value > 0) {
			str = `-${firstInput.value}`;
			firstInput.value = str;
			Number(firstInput.value);
			concat = '';
			concat += firstInput.value;
			secondInput.value = eval(firstInput.value);

			parseInt(secondInput.value);
		} else {
			str = firstInput.value.toString();
			str = str.slice(1);
			firstInput.value = str;
			Number(firstInput.value);
			secondInput.value = eval(firstInput.value);

			parseInt(secondInput.value);
		}
	}

	if (e.target.classList.contains('cancelall')) {
		firstInput.value = '';
		concat = '';
		secondInput.value = '';
	}

	defaultSecondInput();
}
keyboard.addEventListener('click', clickKeys);
function defaultSecondInput() {
	if (firstInput.value === '' || firstInput.value === null) {
		secondInput.value = '0';
	}
}
function equalsFunc(e) {
	e.preventDefault();
	parseInt(firstInput.value);
	secondInput.value = eval(firstInput.value);
	firstInput.value = secondInput.value;
	secondInput.value = 0;
}

equals.addEventListener('click', equalsFunc);

function deleteEl(e) {
	e.preventDefault();

	let str = firstInput.value;
	let deletedstr = str.slice(0, str.length - 1);

	firstInput.value = deletedstr;
	concat = '';
	concat += firstInput.value;
	if (typeof str.slice(0, str.length - 1) === 'number')
		secondInput.value = eval(firstInput.value);
	defaultSecondInput();
}

deleteBtn.addEventListener('click', deleteEl);

function displayOnInput(e) {
	e.preventDefault();
	parseInt(firstInput.value);
	secondInput.value = eval(firstInput.value);
	defaultSecondInput();
}
