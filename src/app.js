import axios from "axios";

console.log('Dit werkt in de localhost!');

// [X] ik houd hier notities en pseudocode bij
// [X] eerst axios importeren in app.js
// [] importeer object naar console via normale api door een async functie te schrijven
// en dan kun je zometeen proberen om de naam van het allereerste land (eerste in de array) weer te geven op de pagina!

async function fetchCountries() {
    try {
        // maak request naar endpoint All
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log("Alle landen:",result);
        const resultEU = await axios.get('https://restcountries.com/v3.1/region/europe');
        console.log("alle europese landen:",resultEU);
        //proberen 1 land te loggen
        console.log("het eerste land:",result.data[0].name);
        //proberen 1 EU land te loggen
        console.log("het eerste EU:",resultEU.data[0].name.common);

        //map methode maken voor alle landnamen - zonder vlag
        const allCountryNames = result.data.map((countryName) => {
            return countryName.name + "Has a population of " + countryName.population + " people";
        });
        console.log("MAP methode landnaam",allCountryNames);

        //map methode maken voor alléén de vlaggen
        const allCountryFlags = result.data.map((countryName) => {
            return countryName.flag;
        });
        console.log("MAP methode vlag URL's",allCountryFlags);

        // // 1. Sla de referentie naar ons "echte" HTML element op
        // const countryContainer = document.getElementById('country-data');
        // // 2. Vul dat element met de data waarde
        // countryContainer.textContent = allCountryNames;

        /*
        * function namecolor(name, region) {
    //gives a name the color of the region it belongs to
    const colormapping = {
        Africa: "blue",
        Americas: "green",
        Asia: "red",
        Europe: "yellow",
        Oceania: "purple",
    }
    return `<span style=color:${colormapping[region]}> ${name} </span>`
}
        * */

        //of op de betere manier:
        // pseudocode: maak eerst tags in het HTML bestand, waarvan 1 een ID='country-data' heeft
// dit wordt een 'node'
        const countryOutputNode = document.getElementById("country-data");
//zet elke merknaam in een <li> element. Zorg daarna dat deze in de juiste node komt met appendChild
        allCountryNames.forEach(countryValue => {
            let newCountryItem = document.createElement('li');
            newCountryItem.textContent = countryValue;
            countryOutputNode.appendChild(newCountryItem);
        })
        // Breidt de <li>-tag uit met een <img>-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen geven
        // naamitem.setAttribute(class, name)
        const flagOutputNode = document.getElementById("country-flags");
//zet elke merknaam in een <li> element. Zorg daarna dat deze in de juiste node komt met appendChild
        allCountryFlags.forEach(flagURL => {
            let newCountryItem = document.createElement('li');
            newCountryItem.textContent = flagURL;
            flagOutputNode.appendChild(newCountryItem);
        })
    } catch(e) {
        console.error(e);
    }
}

// Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina.

fetchCountries();
console.log(fetchCountries());