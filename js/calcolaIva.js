let importo, iva;

importo = parseFloat(prompt("Inserisci il montare a cui aggiungere l\'iva IMPORTANTE: inserisci solo numeri"));

iva = 22;
console.log(importo);

const ImportoConIva = importo + (importo / 100 * iva);
console.log(ImportoConIva)


document.getElementById("generated-iva").innerHTML =
`
<h1 class="text-center">BEN FATTO ORA PUOI VEDERE L'IMPORTO CON IVA</h1>

            <ul >
                <li class="text-center"><h3>I dati da te inseriti</h3></li>
                <li class="text-center">Importo: ${importo}€</li>
            </ul>

            <ul >
                <li class="text-center"><h3>L'importo con iva</h3></li>
                <li class="text-center">Importo con iva: ${ImportoConIva}€</li>
                <li class="text-center">Iva da pagare: ${ImportoConIva - importo}€</li>
            </ul>
`;