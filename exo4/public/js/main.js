let nbr1 = +prompt("Entrez le premier nombre :");
let operateur = prompt("Entrez l'opérateur (+, -, *, /) :");
let nbr2 = +prompt("Entrez le deuxième nombre :");

let resultat;

switch (operateur) {
  case "+":
    resultat = nbr1 + nbr2;
    break;
  case "-":
    resultat = nbr1 - nbr2;
    break;
  case "*":
    resultat = nbr1 * nbr2;
    break;
  case "/":
    resultat = nbr1 / nbr2;
    break;
}

alert(resultat);