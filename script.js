let messageNumberRange = "Please enter a number between 0 and 50 (both included) :";
let messageGuessNumber = "Guess the number !";

function askNumber(message) {
	let number = Number(prompt(message, "0 < ? < 50"));
	while (number > 50 || number < 0 || number == NaN)
		number = Number(prompt(messageNumberRange));
	return (number);
}

function didIWin(givenNumber, numberToFind) {
	if (givenNumber == numberToFind)
		return (alert("Bravo ! Vous avez deviné le nombre"), true);
	else if (givenNumber > numberToFind)
		return (alert("Plus petit !"), false);
	else 
		return (alert("Plus grand !"), false);
}

function gamePlay() {
	askNumber(`Player 1 : ${messageNumberRange}`);
	alert("Let's start the game ! Player 2, time for you to guess !");
	let guessedOrNot = false;
	let attemptsCount = 0;
	while (guessedOrNot == false) {
		guessedOrNot = didIWin(askNumber(messageGuessNumber));
		alert(`${++attemptsCount} attempts !`);
	}
}

gamePlay();