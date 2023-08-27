const name = document.querySelector(".c-name");
const continent = document.querySelector(".c-continent");
const people = document.querySelector(".c-people");
const language = document.querySelector(".c-language");
const currency = document.querySelector(".c-currency");
const countryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.group(data);
    });
};
countryData("india");
