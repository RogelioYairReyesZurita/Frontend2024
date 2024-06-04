import React from 'react';

const CountryModal =({selectedCountry,showModal,handleCloseModal})=>{
    return(
        <div>
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
    )
}

export default CountryModal