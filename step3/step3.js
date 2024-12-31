/* Étape 3

Désormais la fonction didIWin devra retourner true si l’utilisateur 
a trouvé le chiffre, false sinon.

Dans la fonction gamePlay, si didIWin a retourné true, on arrete le 
jeu. En revanche, si elle a retourné false, on redemande un chiffre 
à l’utilisateur.

*/

function askNumber() {
	let givenNumber = Number(prompt("please enter a number !"));
	return (givenNumber);
}

function didIWin(givenNumber) {
	if (givenNumber === 22) {
		alert("Bravo ! Vous avez deviné le nombre.");
		return (true);
	}
	if (givenNumber > 22)
		alert("Plus petit !");
	else 
		alert("Plus grand !");
	return (false);
}

function gamePlay() {
	while (didIWin(askNumber()) === false) ;
}

gamePlay();