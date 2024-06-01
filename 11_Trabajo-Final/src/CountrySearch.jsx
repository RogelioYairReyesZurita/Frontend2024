import React, { useState } from 'react';
import axios from 'axios';

const CountrySearch = () => {
  const [searchType, setSearchType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [countryDataList, setCountryDataList] = useState([]);


  // ------------------------pagina handleSearch ------------------------------
  const handleSearch = async () => {
    try {
      let response;
      if (searchType === 'name') {
        response = await axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`);
      } else if (searchType === 'language') {
        response = await axios.get(`https://restcountries.com/v3.1/lang/${searchTerm}`);
      } else if (searchType === 'capital') {
        response = await axios.get(`https://restcountries.com/v3.1/capital/${searchTerm}`);
      }
      setCountryDataList([...countryDataList, response.data[0]]);
    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryData(null);
    }
  };


  // -----------------------------------------------------------------------
  const handleButtonClick = (type) => {
    setSearchType(type);
    setSearchTerm('');
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };



  return (
    <div >
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        {/* --------------Botones------------------------------ */}
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          onClick={() => handleButtonClick('name')}
        />
        <label
          className="btn btn-outline-success border-3"
          for="btnradio1"
        >Buscar por Nombre
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          onClick={() => handleButtonClick('language')} />
        <label
          className="btn btn-outline-success border-3"
          for="btnradio2"
        >Buscar por Lenguaje</label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
          onClick={() => handleButtonClick('capital')} />
        <label
          className="btn btn-outline-success border-3"
          for="btnradio3"
        >Buscar por Capital</label>
      </div>

      {/* ------------------------------------busquedas----------------------- */}
      <br />
      <br />
      <div>
        <div className="row">
          <div className="col-md-6 ml-0">
            <div className="input-group mb-3">

              <input
                className="form-control border-success border-3"
                type="text"
                placeholder={searchType === 'language' ? 'Ingrese código de lenguaje (por ej., en, es)' : 'Ingrese término de búsqueda'}
                value={searchTerm}
                onChange={handleInputChange}
              />

              <button
                className="btn btn-outline-success border-3"
                onClick={handleSearch}
              >Buscar</button>

            </div>
          </div>
        </div>
      </div>

      {/* ------------card-------------------------- */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {countryDataList.map((country, index) => (
          <div className="card bg-secondary" style={{ width: '18rem', border: '1px solid #ccc', margin: '10px', padding: '10px' }} key={index} >
            <img src={country.flags.svg} alt={`${country.name.common} flag`} class="card-img-top" />
            <ul className="list-group list-group-flush ">
              <li className="list-group-item">Name: {country.name.common}</li>
              <li className="list-group-item">Capital: {country.capital ? country.capital[0] : 'N/A'}</li>
              <li className="list-group-item">Population: {country.population}</li>
              <li className="list-group-item">Area: {country.area} km²</li>
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CountrySearch;
