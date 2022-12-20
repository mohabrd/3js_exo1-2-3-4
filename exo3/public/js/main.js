let nombres = prompt("Entrez une valeur :");

let nbr = Number(nombres);

switch (nbr % 2) {
  case 0:

  alert("Le nombre est un multiple de 2");
    break;
  case 1:

    alert("Le nombre n'est pas un multiple de 2");
    break;
  default:
    alert("Ceci n'est pas un nombre");
    break;
}
