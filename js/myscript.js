const kilometersNumber = parseInt(prompt("Inserisci il numero di km da percorrere"));
const passengerAge = parseInt(prompt("Inserisci l'età del passeggero"));
if (isNaN(kilometersNumber) || isNaN(passengerAge)) {
    document.getElementById("output").innerHTML = "Errore. Le informazioni inserite non sono valide.";
}