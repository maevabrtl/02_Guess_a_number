/*
Étape 6

Si le nombre proposé par l’utilisateur est plus petit que le 
nombre à deviner, alors vous changerez le range minimal. Ce 
ne sera plus 10 mais le dernier nombre proposé. Attention si 
le nombre proposé est en dessous du range minimal, cela ne 
sert à rien de le changer.

Ex : 12 < ? < 45, si le nombre proposé est 10, on ne change 
pas le range. Mais on peut afficher une alert pour indiquer 
que le nombre proposé n’est pas dans le range.

Même chose si le nombre est supérieur.

*/
const minHTML = document.getElementById("min");
const maxHTML = document.getElementById("max");
let min = 0;
let max = 50;

function askNumber(message) {
	let number = Number(prompt(message));
	return number;
}

function didIWin(givenNumber, numberToGuess) {
	if (givenNumber === numberToGuess) {
		alert("Congrats! You guessed the number.");
		return true;
	}
	if (givenNumber > numberToGuess) {
		alert("Smaller!");
		if (givenNumber < max) {
			max = givenNumber;
			maxHTML.innerHTML = max;
		}
	}
	else {
		alert("Bigger!");
		if (givenNumber > min) {
			min = givenNumber;
			minHTML.innerHTML = min;
		}
	}
	return false;
}

function checkValidNumber(number, min, max) {
	if (typeof(number) === "number" && !isNaN(number) &&
	number >= min && number <= max)
		return true;
	return false;
}

function gamePlay() {
	let numberToGuess = -1;
	while (checkValidNumber(numberToGuess, 0, 50) === false) {
		numberToGuess = askNumber("Please enter a number between 0 and 50 for Player 2 to guess!");
	}
	let count = 0;
	const checkButton = document.getElementById("button");
	const input = document.getElementById("inputNumber");
	const counter = document.getElementById("counter");

	checkButton.addEventListener("click", () => {
		counter.innerHTML = ++count;
		let inputNumber = Number(input.value);
		if (!inputNumber || !checkValidNumber(inputNumber, min, max)) {
			alert(`Please enter a valid number between ${min} and ${max}!`);
			return;
		}
		if (didIWin(inputNumber, numberToGuess)) {
			document.body.innerHTML = "<h3>Congrats! You guessed the number.</h3>";
	  	}
	});
}

gamePlay();