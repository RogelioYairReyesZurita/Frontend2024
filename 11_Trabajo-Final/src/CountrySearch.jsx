import React from 'react';

const CountrySearch = ({ searchType, setSearchType, searchTerm, setSearchTerm, handleButtonClick, handleInputChange, handleSearch }) => {

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        {/* --------------Botones------------------------------   */}
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
    </div>
  );
};
export default CountrySearch