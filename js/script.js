console.log("funziono")

let firstName, lastName, favoriteColor;

firstName = prompt("Inserisci il tuo nome");
lastName = prompt("Inserisci il tuo cognnome");
favoriteColor = prompt("Inserisci il tuo colore preferito");


console.log(firstName, lastName, favoriteColor );

const generatedPassword = firstName + lastName + favoriteColor ;

console.log( generatedPassword);

document.getElementById("generated-pw").innerHTML = generatedPassword;
