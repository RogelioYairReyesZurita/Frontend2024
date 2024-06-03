import React, { useState } from 'react';
import axios from 'axios';

const CountrySearch = () => {
  const [searchType, setSearchType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [countryDataList, setCountryDataList] = useState([]);

  // Estado para almacenar el país seleccionado
  const [selectedCountry, setSelectedCountry] = useState(null);
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);



  // ---------------------para buscar 3 pises aleatorios------------------
  const getRandomCountries = (countries, num) => {
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

      if (searchType === 'language') {
        const randomCountries = getRandomCountries(response.data, 3);
        setCountryDataList([...countryDataList, ...randomCountries]);
      } else {
        setCountryDataList([...countryDataList, ...response.data]);
      }

    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryDataList([]);
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



  // Función para manejar el clic en la bandera del país
  const handleFlagClick = (country) => {
    setSelectedCountry(country);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCountry(null);
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
          <div className="card border border-dark px-1 bg-secondary" style={{ width: '18rem', border: '1px solid #ccc', margin: '10px', padding: '10px' }} key={index} >
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              class="card-img-top"
              onClick={() => handleFlagClick(country)}
              style={{ cursor: 'pointer' }} // Añadir cursor de puntero
            />
            <ul className="list-group list-group-flush ">
              <li className="list-group-item text-white"><h5 style={{
                textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `
              }}>{country.name.common}
              </h5>
              </li>
            </ul>

          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCountry && (
        <div
          className={`modal ${showModal ? 'show' : ''} `}
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? 'block' : 'none' }}>

          <div className="modal-dialog " role="document">
            <div className="modal-content ">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCountry.name.common}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p><ion-icon name="flag-outline"></ion-icon> <strong> Capital:</strong> {selectedCountry.capital ? selectedCountry.capital[0] : 'N/A'}</p>
                <p><ion-icon name="people-outline"></ion-icon><strong> Population:</strong> {selectedCountry.population}</p>
                <p><ion-icon name="image-outline"></ion-icon><strong> Area:</strong> {selectedCountry.area} km²</p>
                <p><ion-icon name="map-outline"></ion-icon><strong> Region:</strong> {selectedCountry.region}</p>
                <p><ion-icon name="map-outline"></ion-icon><strong> Subregion:</strong> {selectedCountry.subregion}</p>
                <p><ion-icon name="language-outline"></ion-icon><strong> Languages:</strong> {Object.values(selectedCountry.languages).join(', ')}</p>
                <p><ion-icon name="cash-outline"></ion-icon><strong> Currencies:</strong> {Object.values(selectedCountry.currencies).map(c => c.name).join(', ')}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default CountrySearch;