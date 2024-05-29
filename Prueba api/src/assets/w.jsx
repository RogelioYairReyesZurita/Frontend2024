import axios from "axios";
import { useState, useEffect } from "react"





function App() {
  const [personajes, setPersonajes] = useState([])


  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=48dee258b80c4cd01e85350c4b55bb32&hash=e40039c72ea10d64098e36dfbd03f81d').then(res => {
      setPersonajes(res.data.data.results)


    }).catch(error => console.log(error))
  }, [])

  console.log(personajes)



  return (
    <div >
      <h1>Marvel</h1><hr />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          personajes.map(per => (

            <div className="col" key={per.id}>
              <div className="card" style={{ width: "18rem", height: "18rem" }}>
                <img
                  src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                  className="card-img-top"
                  style={{ width: "80%", height: "80%" }} />

                <div className="card-body">
                  <p className="card-text">{per.name}</p>
                </div>
              </div>
            </div>

          ))

        }
      </div>

    </div>
  );
}

export default App;
