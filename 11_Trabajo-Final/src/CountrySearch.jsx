import React, { useState } from 'react';
import axios from 'axios';

const CountrySearch = () => {
  const [searchType, setSearchType] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [countryData, setCountryData] = useState(null);

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
      setCountryData(response.data[0]);
    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryData(null);
    }
  };




  const handleButtonClick = (type) => {
    setSearchType(type);
    setSearchTerm('');
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };



  return (
    <div >

      {/* <div>
        <button onClick={() => handleButtonClick('name')}>Buscar por Nombre</button>
        <button onClick={() => handleButtonClick('language')}>Buscar por Lenguaje</button>
        <button onClick={() => handleButtonClick('capital')}>Buscar por Capital</button>
      </div> */}

      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

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


     
      {/* <div className="input-group mb-3">
        <input
          className="form-control w-50"
          type="text"
          placeholder={searchType === 'language' ? 'Ingrese código de lenguaje (por ej., en, es)' : 'Ingrese término de búsqueda'}
          value={searchTerm}
          onChange={handleInputChange}
        />
        
      </div> */}
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


      {countryData && (

        // <table>
        //   <thead>
        //     <tr>
        //       <th>Name</th>
        //       <th>Capital</th>
        //       <th>Population</th>
        //       <th>Area</th>
        //       <th>Flag</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <td>{countryData.name.common}</td>
        //       <td>{countryData.capital}</td>
        //       <td>{countryData.population}</td>
        //       <td>{countryData.area} km²</td>
        //       <td>
        //         <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} height="50" />
        //       </td>
        //     </tr>
        //   </tbody>
        // </table>

        // ----------------------------------------------------------------------
        <div className="card" style={{ width: '18rem' }}>
        <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} class="card-img-top"/>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {countryData.name.common}</li>
          <li className="list-group-item">Capital: {countryData.capital}</li>
          <li className="list-group-item">Population: {countryData.population}</li>
          <li className="list-group-item">Area: {countryData.area} km²</li>
        </ul>
      </div>
      )}
    </div>
  );
};

export default CountrySearch;
