/* Étape 1
Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur. 
Stocker sa réponse dans une variable de type adéquat nommée givenNumber. */

function askNumber() {
	let givenNumber = Number(prompt("please enter a number !"));
	return (givenNumber);
}

// TEST

console.log(askNumber());