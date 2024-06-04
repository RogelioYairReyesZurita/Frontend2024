// App.jsx
import "./assets/css/index.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import CountrySearch from "./CountrySearch";
import CountryList from "./CountryList";
import CountryModal from "./CountryModal";
import {getRandomCountries} from "./RandomCountry"

function App() {

  const [searchType, setSearchType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [countryDataList, setCountryDataList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);  // Estado para almacenar el país seleccionado
  const [showModal, setShowModal] = useState(false);  // Estado para controlar la visibilidad del modal

  // recupera las búsquedas guardadas al cargar el componente
  useEffect(() => {
    const savedCountryDataList = JSON.parse(localStorage.getItem('countryDataList'));
    if (savedCountryDataList) {
      setCountryDataList(savedCountryDataList);
    }
  }, []);

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

      let newCountryDataList;
      if (searchType === 'language') {
        const randomCountries = getRandomCountries(response.data, 3);
        newCountryDataList = [...countryDataList, ...randomCountries];
      } else {
        newCountryDataList = [...countryDataList, ...response.data];
      }

      setCountryDataList(newCountryDataList);
      saveToLocalStorage(newCountryDataList);

      Swal.fire({
        icon: 'success',
        title: 'País Añadido',
        text: 'El país ha sido añadido a la lista.',
      });

    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryDataList([]);
    }
  };

  // función para eliminar un país de la lista
  const handleRemoveCountry = (index) => {
    const newCountryDataList = countryDataList.filter((_, i) => i !== index);
    setCountryDataList(newCountryDataList);
    saveToLocalStorage(newCountryDataList);
    Swal.fire({
      icon: 'warning',
      title: 'País Eliminado',
      text: 'El país ha sido eliminado de la lista.',
    });
  };

  // guarda las búsquedas en el almacenamiento local
  const saveToLocalStorage = (data) => {
    localStorage.setItem('countryDataList', JSON.stringify(data));
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

  const handleButtonClick = (type) => {
    setSearchType(type);
    setSearchTerm('');
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <h1>Country Search</h1>
      <div >
        <CountrySearch
          searchType={searchType}
          setSearchType={setSearchType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleButtonClick={handleButtonClick}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
        {/* ------------card-------------------------- */}
        <CountryList 
        countryDataList={countryDataList}
        handleFlagClick={handleFlagClick}
        handleRemoveCountry={handleRemoveCountry}
        />
        {/* Modal */}
        <CountryModal
        selectedCountry={selectedCountry}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
}

export default App;
