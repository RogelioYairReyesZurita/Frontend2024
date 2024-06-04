export const getRandomCountries = (countries, num) => {
    let result = [];
    let len = countries.length;
    let taken = new Array(len);
    if (num > len) {
      return countries;
    }
    while (num--) {
      let x = Math.floor(Math.random() * len);
      result.push(countries[x in taken ? taken[x] : x]);
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };