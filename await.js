//Gersson Hernandez-61811953

let fetch = require('node-fetch') //Instalar npm npde-fetch

async function getCountry(paisNombre) {
    try {
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${paisNombre}`)
        let country = await response.json()
        console.log(country)

    } catch (error) {
        return "Error al consultar el Api"
    }
}



var readline = require('readline'); //requiere instalar el npm read-line

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un País ', function(respuesta) {
    let texto = respuesta.toString();


    rl.close();
    getCountry(texto);
});