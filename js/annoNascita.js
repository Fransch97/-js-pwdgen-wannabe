console.log("funziono")

let age, currentYear;

age = parseInt(prompt("Inserisci la tua età"));

console.log(age);

currentYear = 2022;

console.log(currentYear);

const birthYear = currentYear - age ;

console.log(birthYear)

const add10 = 10;

const add20 = 20;

const add5 = 5;


document.getElementById("generated-birthyear").innerHTML = 
`
<h1 class="text-center">BEN FATTO ORA PUOI VEDERE L'ANNO DI NASCITA</h1>
<ul >
<li class="text-center"><h3>I dati da te inseriti</h3></li>
<li class="text-center">Età: ${age}</li>
</ul>

<ul >
<li class="text-center"><h3>L'anno calcolato</h3></li>
<li class="text-center">Anno di nascita: ${birthYear}</li>
</ul>

<ul >
<li class="text-center"><h3>Fra 10 anni </h3></li>
<li class="text-center">La tua età sarà: ${age+add10}</li>
</ul>

<ul >
<li class="text-center"><h3>Fra 20 anni </h3></li>
<li class="text-center">La tua età sarà: ${age+add20}</li>
</ul>

<ul >
<li class="text-center"><h3>Fra 25 anni </h3></li>
<li class="text-center">La tua età sarà: ${age+add5+add20}</li>
</ul>

<ul >
<li class="text-center"><h3>Nel anno 2050  </h3></li>
<li class="text-center">La tua età sarà: ${age+(2050 - birthYear)}</li>
</ul>
`;
