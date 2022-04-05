console.log("funziono")

let firstName, lastName, favoriteColor;

firstName = prompt("Inserisci il tuo nome");
lastName = prompt("Inserisci il tuo cognnome");
favoriteColor = prompt("Inserisci il tuo colore preferito");


console.log(firstName, lastName, favoriteColor );

const generatedPassword = firstName + lastName + favoriteColor + 22;

console.log( generatedPassword);

document.getElementById("generated-pw").innerHTML = 
`
<h1 class="text-center">BEN FATTO ORA PUOI VEDERE LA PASSWORD GENERATA PER TE</h1>
            <ul >
                <li class="text-center"><h3>I dati da te inseriti</h3></li>
                <li class="text-center">Nome: ${firstName}</li>
                <li class="text-center">Cognome: ${lastName}</li>
                <li class="text-center">Colore preferito: ${favoriteColor}</li>
            </ul>

            <ul >
                <li class="text-center"><h3>La password generata dal pc per te è</h3></li>
                <li class="text-center">Password: ${generatedPassword}</li>
            </ul>
`
;
