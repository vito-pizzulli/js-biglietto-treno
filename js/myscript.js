const kilometersNumber = parseInt(prompt("Inserisci il numero di km da percorrere"));
const passengerAge = parseInt(prompt("Inserisci l'età del passeggero"));
let ticketDiscount;
if (isNaN(kilometersNumber) || isNaN(passengerAge)) {
    document.getElementById("output").innerHTML = "Errore. Le informazioni inserite non sono valide.";
}
let ticketPrice = (kilometersNumber * 0.21);
if (passengerAge < 18) {
    ticketDiscount = ((20 / 100) * ticketPrice);
    ticketPrice = (ticketPrice - ticketDiscount);
} else if (passengerAge > 65) {
    ticketDiscount = ((40 / 100) * ticketPrice);
    ticketPrice = (ticketPrice - ticketDiscount);
}
console.log(passengerAge, ticketPrice, ticketDiscount);