// fetch data
const url = 'https://restcountries.com/v3.1/all'

const fetchCountries = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => getCountries(data))
}

const getCountries = (data) => {
    console.log(data)
// loop data
    for(const countries of data){
        
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
         countryDiv.innerHTML = `<h2>Name: ${countries.name.common}</h2>
         <p>capital: ${countries.capital}</p>
        
         <button onclick="getFlags('${countries.cca2}')">Flags</button>`;
         const countriesSection = document.getElementById("countriesSection")
         countriesSection.appendChild(countryDiv)
    }
   
    
}
// fetch code data and data
const getFlags = code =>{
    // https://restcountries.com/v3.1/alpha/{code}
const url2 = `https://restcountries.com/v3.1/alpha/${code}`
fetch(url2)
.then(res => res.json())
.then(data2 => countryDetails(data2))
}

const countryDetails = countryDocument => {
    console.log(countryDocument[0])
const flagSection = document.getElementById('flagSection')
 flagSection.innerHTML = `
 <h2> Name: ${countryDocument[0].name.common}</h2>
 <img src="${countryDocument[0].flags.png}" alt=""
>
 `

}

fetchCountries()