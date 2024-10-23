const container =document.querySelector(".div-container");
const inputSearch = document.querySelector("#input-search");
let countryArr = [];

async function fetchcountries(){
    try{
    const response = await fetch(" https://restcountries.com/v3.1/all");
 const data = await response.json();

//  renderCountries(data);
 countryArr = data;
 renderCountries(countryArr);
 }catch(error){
console.log(error);
}
}
fetchcountries();


function renderCountries(contries){
    container.innerHTML = "";
    
    contries.forEach(country => {
        const joinDiv = document.createElement("div");
        joinDiv.innerHTML = `<img src ="${country.flags.png}" alt ="${country.flags.alt}"> 
        <h2>${country.name.common}</h2>
        <h4>${country.population}</h4>
        `
          container.classList = "grid grid-cols-3 bg-sky-300 gap-y-4 gap-x-8 ml-10 wx-auto w-full "
        container.append(joinDiv);
      
       
    });
}
inputSearch.addEventListener("keyup",(e)=>{
    const term = e.target.value.toLowerCase();
    const filterCountries =countryArr.filter(country => country.name.common.toLowerCase().includes(term));

renderCountries(filterCountries);
})