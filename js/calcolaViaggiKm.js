let kmDaPercorrere, mediaConsumi, prezzoAttualeCarburatore;

kmDaPercorrere = parseInt(prompt("Inserisci i km da percorrere"));

mediaConsumi = parseFloat(prompt("Inserisci la media di consumo per ogni 100km"));

prezzoAttualeCarburatore = parseFloat(prompt("Inserisci prezzo attuale del carburante ESMP X.XX"));

console.log(kmDaPercorrere, mediaConsumi,  prezzoAttualeCarburatore);

let kmPercorribiliAlLitro = 100 / mediaConsumi;

console.log(kmPercorribiliAlLitro );

let litriNecessariPerViaggio = kmDaPercorrere / kmPercorribiliAlLitro;

console.log(litriNecessariPerViaggio );

let costoViaggioPerKM = parseInt(litriNecessariPerViaggio * prezzoAttualeCarburatore);

console.log(costoViaggioPerKM );

document.getElementById("generate-km-cost").innerHTML = 
`
            <h1 class="text-center">BEN FATTO ORA PUOI VEDERE IL COSTO VIAGGIO IN BASE AI KM</h1>

            <ul >
                <li class="text-center"><h3>I dati da te inseriti</h3></li>
                <li class="text-center">KM da percorrere: ${kmDaPercorrere}km</li>
                <li class="text-center">La tua media di consumi : ${mediaConsumi}L/100km</li>
                <li class="text-center">Prezzo attuale del carburante: ${prezzoAttualeCarburatore}€/L</li>
            </ul>

            <ul >
                <li class="text-center"><h3>Costo medio carburante per il viaggio</h3></li>
                <li class="text-center">Il costo sarà nella media di: ${costoViaggioPerKM + 1}€</li>
            </ul>

`;
