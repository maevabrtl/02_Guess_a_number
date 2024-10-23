# ***Exercice individuel n°3 : Guess a number !***

En tout premier lieu, je crée un fichier `index.html` ainsi qu'un fichier `script.js`. J'utilise le raccourci `!` pour mettre le header de mon fichier html.<br>
<br>
Dans `<html lang="en">`, je modifie `en` par `fr`; ce n'est pas nécessaire mais j'ai pu voir que les textes demandés dans cet exercice sont en français, je l'ajoute donc pour m'habituer à faire attention à ce genre de "détails".<br>
Pour cette même raison, je modifie le titre du document pour un titre plus clair : `<title>Guess a number</title>`.<br>
<br>
Je fais ensuite le lien avec mon fichier `script.js` grâce à cette ligne que j'ajoute dans ma balise `<head>` : `<script defer src="script.js"></script>`.<br>
<br>
> [!TIP]
> L’attribut `defer` permet de s’assurer que tout le fichier HTML est chargé avant d’exécuter le JavaScript.
Pour réaliser cet exercice il nous est proposé d'utiliser un [compilateur en ligne](https://js.do/), mais par habitude j'utiliserai mon IDE (*VSCode*) et son extension *Live Server* pour afficher ma page HTML en local dans mon navigateur.<br>

## **Étape 1**

1. Pour cette étape, j'aurais besoin d'une string à passer à mon prompteur afin demander à l'utilisateur d'entrer un nombre. Dans mon fichier `script.js`, je déclare donc une variable (c'est optionnel mais plus sympathique) telle que : `let askMessage = "Guess the number !";`.<br>
Je crée ensuite une fonction `askNumber()`, à l'intérieur de laquelle j'utilise la commande `prompt()` avec en paramètre ma variable `message` qui sera aussi en paramètre de ma fonction `askNumber()` pour plus de lisibilité, et à laquelle je donnerai la valeur de `askMessage`.
```
let askMessage = "Guess the number !";

function askNumber(message) {
	prompt(message);
}

askNumber(askMessage);
```
2. Je déclare ensuite une variable `givenNumber` à l'intérieur de ma fonction et lui donne comme valeur le retour de ma fonction `prompt()`.<br>
```
	let givenNumber = prompt(message);
```
> [!NOTE]
> La commande `prompt()` a comme valeur de retour soit l'input donné par l'utilisateur sous forme de `String`, soit `null` si rien n'a été entré et que la fenêtre de prompt a été fermée.<br>
> Pour que la variable `givenNumber` soit de type `Number` nous avons donc besoin de convertir le retour de la fonction `prompt()` de `String` à `Number`.<br>
Il existe plusieurs méthodes pour réaliser cette conversion, mais j'utiliserai le *cast*[^castdef] `Number(maVariable)` car c'est la méthode qui me semble être la plus simple et la plus polyvalente (puisqu'il est possible d'afficher des entiers comme des décimaux, et que si le nombre n'est pas valide `NaN` (*Not a Number*) sera affiché).

En prenant le cast en compte, le code ressemble finalement à ceci :
```
	let givenNumber = Number(prompt(message));
```
Pour finir, j'appelle ma fonction : `askNumber(askMessage);`.
> [!TIP]
> *Pour vérifier que mon code fonctionne, je peux ajouter un `console.log(givenNumber);` afin de vérifier que la valeur récupérée est la bonne, et un `console.log(typeof(givenNumber));` pour vérifier que le type est bien `Number`.*

## **Étape 2**
1. 
2. 

## **Étape 3**

1. 
2. 

## **Étape 4**
1. 
2. 
3. 

## **Étape 5**
1. 
2. 
3. 
4. 

## **Étape 6**


# ***Pour aller plus loin*** 

# ***Conclusion***

Réaliser ce `README.md` / cet exercice m'a permis : 
- 
<br>
 
**conclusion en une ou deux phrases**

[^castdef]: Un cast est une « conversion explicite », permettant de convertir un type de valeur en un autre. Ce n'est possible que sur les types dits « primitifs », c'est-à-dire `Number`, `String`, `Boolean` (mais aussi `null`et `Undefined`). A contrario, JavaScript effectue parfois des « conversions implicites » pour adapter automatiquement les valeurs à leur usage, comme dans les fameux `"4" + 2`, qui affichera `42` car le nombre 2 aura été *implicitement* converti en `String`.
