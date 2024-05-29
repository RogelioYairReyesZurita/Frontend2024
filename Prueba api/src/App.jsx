import axios from "axios";
import React, { useState } from "react";

//  https://gateway.marvel.com:443/v1/public/characters?apikey=48dee258b80c4cd01e85350c4b55bb32
//  key public: 48dee258b80c4cd01e85350c4b55bb32
//  key privade: 03a888d4caa93293f1d9a55e304b6ec79645256a
//  ts: 1

// 103a888d4caa93293f1d9a55e304b6ec79645256a48dee258b80c4cd01e85350c4b55bb32
//   eb17e7cb307157e81e40d6f8c606b7d8
//       E40039C72EA10D64098E36DFBD03F81D
// hash: e40039c72ea10d64098e36dfbd03f81d

//   Abyss


function App() {
  const [personajes, setPersonajes] = useState([]);
  const [mostrarPersonajes, setMostrarPersonajes] = useState(false);

  const obtenerPersonajes = () => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=48dee258b80c4cd01e85350c4b55bb32&hash=e40039c72ea10d64098e36dfbd03f81d"
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
        setMostrarPersonajes(true);
      })
      .catch((error) => console.log(error));
  };



  
  return (
    <div>
      <h1>Marvel</h1>
      <hr />
      <button onClick={obtenerPersonajes}>Mostrar Personajes</button>
      {mostrarPersonajes && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {personajes.map((per) => (
            <div className="col" key={per.id}>
              <div className="card" style={{ width: "18rem", height: "18rem" }}>
                <img
                  src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                  className="card-img-top"
                  style={{ width: "80%", height: "80%" }}
                  alt={per.name}
                />
                <div className="card-body">
                  <p className="card-text">{per.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;