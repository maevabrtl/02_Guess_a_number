/* Étape 4

Maintenant on va considérer que l’on a pas un seul joueur mais 2 🧑‍🤝‍🧑.

Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner 
compris entre 0 et 50 tant qu’il ne respecte pas ce range.

La fonction didIWin doit prendre désormais un autre paramètre, le nombre 
à deviner.

Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il 
doit continuer à jouer ou s’il a gagné.

Étape 5

Afficher le range (0-50) auquel notre utilisateur à le droit 
autour du champ. Quelque chose comme 0 < ? < 50.

Si l’utilisateur a gagné nous effacerons tout pour afficher 
notre message de bravo !

En revanche, tant que l’utilisateur n’a pas trouvé le bon 
chiffre, on affichera le nombre de tentatives en cours sur 
la partie.

Ajouter un champ input qui permet à l’utilisateur de rentrer 
sa proposition de nombre directement dans un champ sur la 
page avec un bouton valider.

*/

function askNumber(message) {
	let number = Number(prompt(message));
	return number;
}

function didIWin(givenNumber, numberToGuess) {
	if (givenNumber === numberToGuess) {
		alert("Congrats! You guessed the number.");
		return true;
	}
	if (givenNumber > numberToGuess)
		alert("Smaller!");
	else 
		alert("Bigger!");
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
		if (!inputNumber || !checkValidNumber(inputNumber, 0, 50)) {
			alert("Please enter a valid number between 0 and 50!");
			return;
		}
		if (didIWin(inputNumber, numberToGuess)) {
			document.body.innerHTML = "<h3>Congrats! You guessed the number.</h3>";
	  	}
	});
}

gamePlay();
