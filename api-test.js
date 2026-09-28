const claveApi = '39919c7e88764e72a8d170409262609';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data);
