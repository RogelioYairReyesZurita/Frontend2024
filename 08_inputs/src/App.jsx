import { useForm } from "./Hooks/useForm"

function App() {
  const[InputsForm,HandleInputChange,FormReset] = useForm({
    Texto:"",
    Contraseña:"",
    Checkbox:"",
    Color:"",
    Date:"",
    DateTime:"",
    Email:"",
    File:"",
    Image:"",
    Mes:"",
    Number:"",
    Radio:"",
    Range:"",
    Reset:"",
    Search:"",
    Tel:"",
    Time:"",
    Url:"",
    Week:"",
  })

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log("Texto: ",InputsForm.Texto)
    console.log("Contraseña: ",InputsForm.Contraseña)
    console.log("Checkbox: ",InputsForm.Checkbox)
    console.log("Color: ",InputsForm.Color)
    console.log("Fecha: ",InputsForm.Date)
    console.log("Fecha y Hora: ",InputsForm.DateTime)
    console.log("Correo: ",InputsForm.Email)
    console.log("Imagen: ",InputsForm.Image)
    console.log("Mes: ",InputsForm.Mes)
    console.log("Número: ",InputsForm.Number)
    console.log("Radio: ",InputsForm.Radio)
    console.log("Rango: ",InputsForm.Range)
    console.log("Buscar: ",InputsForm.Search)
    console.log("Teléfono: ",InputsForm.Tel)
    console.log("Hora: ",InputsForm.Time)
    console.log("Url: ",InputsForm.Url)
    console.log("Semana: ",InputsForm.Week)
    FormReset()
  }
  

  return (
    <div>
      <h1>Ejemplos de cada tipo de input</h1>
      <hr />
      <form onSubmit={(e)=>HandleSubmit(e)}>

        <div>
        <label htmlFor="Texto">Texto</label>
        <input 
        id="Texto"
        name="Texto"
        type="text"
        value={InputsForm.Texto}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="CajaConfirmacion">Caja de comprobación</label>
        <input 
        id="Checkbox"
        name="Checkbox"
        type="checkbox"
        value={InputsForm.Checkbox}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Color">Color</label>
        <input 
        id="Color"
        name="Color"
        type="color"
        value={InputsForm.Color}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Fecha">Fecha</label>
        <input 
        id="Date"
        name="Date"
        type="date"
        value={InputsForm.Date}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="FechaHora">Fecha y Hora</label>
        <input 
        id="DateTime"
        name="DateTime"
        type="datetime-local"
        value={InputsForm.DateTime}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Correo">Correo</label>
        <input 
        id="Correo"
        name="Correo"
        type="email"
        value={InputsForm.Email}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Archivo">Archivo</label>
        <input
        id="Archivo"
        name="Archivo"
        type="file" 
        value={InputsForm.File}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Imagen">Imagen</label>
        <input
        id="Imagen"
        name="Imagen"
        type="image"
        src="./Hooks/tec.png"
        alt="!imagenfaltante"
        value={InputsForm.Image}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Mes">Mes</label>
        <input
        id="Mes"
        name="Mes"
        type="month" 
        value={InputsForm.Mes}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Numero">Número</label>
        <input
        id="Numero"
        name="Numero"
        type="number" 
        value={InputsForm.Number}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Contraseña">Contraseña</label>
        <input
        id="Contraseña"
        name="Contraseña"
        type="password" 
        value={InputsForm.Contraseña}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Radio">Radio</label>
        <input
        id="Radio"
        name="Radio"
        type="radio" 
        value={InputsForm.Radio}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Rango">Rango</label>
        <input
        id="Rango"
        name="Rango"
        type="range" 
        value={InputsForm.Range}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Buscar">Buscar</label>
        <input
        id="Buscar"
        name="Buscar"
        type="search" 
        value={InputsForm.Search}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Telefono">Teléfono</label>
        <input
        id="telefono"
        name="Telefono"
        type="tel" 
        value={InputsForm.Tel}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Hora">Hora</label>
        <input
        id="Hora"
        name="Hora"
        type="time" 
        value={InputsForm.Time}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Semana">Semana</label>
        <input
        id="Semana"
        name="Semana"
        type="week" 
        value={InputsForm.Week}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Url">Url</label>
        <input
        id="Url"
        name="Url"
        type="url" 
        value={InputsForm.Url}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
        <label htmlFor="Reset"></label>
        <input
        id="Reset"
        name="Reset"
        type="reset" 
        value={InputsForm.Reset}
        onChange={(event)=>HandleInputChange(event)}
        />
        </div>
        <br />

        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </div>
  )
}

export default App