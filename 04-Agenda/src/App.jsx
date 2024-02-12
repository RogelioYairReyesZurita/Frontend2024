import ListDatos from './ListDatos.jsx'
const Datos=[
  {
    name:'Andres Peres Gonzalez',
    email:'APGonzales@gmail.com',
    face:'AndresPG',
    emailUrl:'https://www.google.com/intl/es-419/gmail/about/',
    faceUrl:'https://www.facebook.com/?locale=es_LA'
  },
  {
    name:'Jose de Jesus Corona',
    email:'APGonzales@gmail.com',
    face:'AndresPG',
    emailUrl:'https://www.google.com/intl/es-419/gmail/about/',
    faceUrl:'https://www.facebook.com/?locale=es_LA'
  },
  {
    name:'Iban Sanches Gomes',
    email:'APGonzales@gmail.com',
    face:'AndresPG',
    emailUrl:'https://www.google.com/intl/es-419/gmail/about/',
    faceUrl:'https://www.facebook.com/?locale=es_LA'
  }
]

function App() {
  
  return (
    <div>
    <h1>Datos de agenda</h1>
    <hr/>
    <ul>
      {
      Datos.map((dato)=>(
        <ListDatos 
        key={dato.name}
        name={dato.name}
        email={dato.email}
        face={dato.face}
        emailUrl={dato.emailUrl}
        faceUrl={dato.faceUrl}
        />
      ))
      }
    </ul>
  </div>
  )
}

export default App
