const name = document.querySelector(".c-name");
const continent = document.querySelector(".c-continent");
const people = document.querySelector(".c-people");
const language = document.querySelector(".c-language");
const currency = document.querySelector(".c-currency");
const grid = document.querySelector(".grid");
const errorNotFound = document.querySelector(".error-notfound");
const renderCountry = function (data, className = "") {
  const html = `
  <div class="country">
          <img class="c-flag" src="${data[0].flags.png}" />
          <div class="c-info">
            <p class="c-name">${data[0].name.common}</p>
            <p class="c-continent">${data[0].continents}</p>
          </div>
          <div class="flex">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path
                d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
              ></path>
            </svg>
            <p class="c-people">${data[0].population}</p>
          </div>
          <div class="flex">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path
                d="M239.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,100,126.93,103.65,103.65,0,0,0,127.69,64H152a8,8,0,0,0,0-16H96V32a8,8,0,0,0-16,0V48H24a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,88,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,76,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L140.94,192h70.11l13.79,27.58A8,8,0,0,0,232,224a8,8,0,0,0,7.15-11.58ZM148.94,176,176,121.89,203.05,176Z"
              ></path>
            </svg>
            <p class="c-capital">${data[0].capital}</p>
          </div>
          <div class="flex">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path
                d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"
              ></path>
            </svg>
            <p class="c-area">${data[0].area}</p>
          </div>
        </div>
  `;
  grid.insertAdjacentHTML("beforeend", html);
};
const countryData = function (country) {
  const buffer = document.querySelector(".buffering-overlay");
  buffer.style.display = "block";
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      buffer.style.display = "none";
      errorNotFound.style.display = "none";
      renderCountry(data);
    })
    .catch(function (error) {
      buffer.style.display = "none";
      console.error("Error fetching data:", error);
      if (error) {
        errorNotFound.style.display = "block";
      }
    });
};
const targetCountry = document.querySelector(".target-country");
const searchButton = document.querySelector(".search-button");
const copyright = document.querySelector(".copyright");

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  const c = String(targetCountry.value);
  countryData(c);
  copyright.style.display = "block";
});
