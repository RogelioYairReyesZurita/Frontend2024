import React from 'react';
const CountryList = ({ countryDataList, handleFlagClick, handleRemoveCountry }) => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {countryDataList.map((country, index) => (
          <div className="card border border-dark px-1 bg-secondary" style={{ width: '18rem', border: '1px solid #ccc', margin: '10px', padding: '10px' }} key={index} >
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              class="card-img-top"
              onClick={() => handleFlagClick(country)}
              style={{ cursor: 'pointer' }}
            />

            <div class="container bg-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="p-2 text-white"><h5 style={{
                  textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `
                }}>{country.name.common}</h5></div>
                <div class="text-white">
                  <button type="button " className="btn btn-outline-danger "
                    onClick={(e) => { e.stopPropagation(); handleRemoveCountry(index); }}
                  ><ion-icon name="trash-outline"></ion-icon></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CountryList