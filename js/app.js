// console.log('superagent');

const request = superagent

const countryList = document.querySelector('.countries-container')
request
  .get('https://restcountries.eu/rest/v2/all')
  .then(function(res){
    // console.log(res.body);
    const apiRes= res.body;
    console.log(apiRes);

    apiRes.forEach(function(El){
      // console.log(El.flag);
      // console.log(El.name);
      // console.log(El.capital);

      countryList.innerHTML +=  `
      <div class="country-card">
        <img class="country-flag" src="${El.flag}" alt="flag">
        <h4 class="country-name">${El.name}</h4>
        <p class="country-capital">${El.capital}</p>
      </div>`
    })
  })
