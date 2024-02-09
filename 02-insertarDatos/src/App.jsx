const persona={
nombre: 'Rogelio Yair Reyes Zurita',
edad:22,
FechaN:'04/02/2002',
NumTel: 2871108599,
carrera:'ING.Sistemas computacionales',
email:'isc20350313@gmail.com',
pasatiempo:[
  'VideoJuegos',
  'Pescar',
  'Programar',
  'Ver series',
  'Comer'],
CiudadN:'Tuxtepec, Oaxaca'
}

function App() {

  return (
    <div>
      <h1>Informacion personal</h1>
      <hr />
      <ul>
        <li>Nombre Completo: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Edad: {persona.FechaN}</li>
        <li>Numero de Telefono: {persona.NumTel}</li>
        <li>Carrera: {persona.carrera}</li>
        <li>Correo: {persona.email}</li>
        <li>Pasatiempos:
          <ul>
            {
            persona.pasatiempo.map((pasatiempo)=>{
              return <li key={pasatiempo}>{pasatiempo}</li>
            })
          }
          </ul>
        </li>
        <li>Lugar de nacimiento: {persona.CiudadN}</li>
      </ul>
    </div>
  )
}

export default App
