const API_KEY = '';

async function handleForm() {
    const location = document.querySelector("input").value;
    await getWeatherData(location);
    return false;
}


async function getWeatherData(location) {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;
    const response =  await fetch(apiUrl);
    const data  = await response.json();
    console.log(data);
    displayWeatherData(data);
}


function displayWeatherData(data) {
    displayAddress(data.resolvedAddress);
    displayTemperature(data.currentConditions.temp);
    displayIcon(data.currentConditions.conditions);
}

function displayAddress(address) {
    document.querySelector("#address").innerHTML = address;
}   

function displayTemperature(temp) {
    document.querySelector("#temperature").innerHTML = temp;
}

function displayIcon(conditions) {
    console.log({conditions});
    let imageName = conditions.replaceAll(',', '').replaceAll(" ", "_").toLowerCase();
    document.querySelector("#icon").innerHTML = `<img src="./icons/${imageName}.png" alt="${conditions}" />`;
}


document.querySelector("form").addEventListener("submit",  async function(event) {
    event.preventDefault();
    await handleForm();
});