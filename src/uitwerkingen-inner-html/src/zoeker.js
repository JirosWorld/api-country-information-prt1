import axios from "axios";
console.log('ik doe het');

async function getOneCountry() {
    try {
        // await request:
        const result = await axios.get('https://restcountries.com/v2/name/peru');
        console.log(result.data[0]);
        //afbeelden op pagina
        const SearchBar = document.getElementById('anker-element');
        SearchBar.innerHTML = `
            <h2>Country: ${result.data[0].name} is situated in [${result.data[0].subregion}]</h2>
            <h3>Population: ${result.data[0].population}</h3>
            <p>Flag: <img src="${result.data[0].flag}" alt="vlag" width="80"></p>
            <p>Currencies: you can pay with ${result.data[0].currencies[0].name} and with ${result.data[0].currencies[0].name}</p>`;
    } catch(e) {
        console.error(e);
        const SearchBar = document.getElementById('anker-element');
        SearchBar.innerHTML = `
            <h1 style="color: red;">ERROR!</h1>
            `;
    }
}

getOneCountry();

//formulier interactief maken:
//zowel referentie naar gehele formulier als naar inputveld nodig
function getInput(e) {
    e.preventDefault();
    console.log("er is geklikt op de Submit knop - de pagina refresht");
    const searchInput = document.getElementById("input-country");
    console.log(searchInput.value);
    //zoekresultaat laten zien;
    const OutputField = document.getElementById('output-search');
    OutputField.innerHTML = `
            <p style="color: green;">Er is gezocht naar: ${searchInput.value}</p>
            `;
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener('submit',getInput);