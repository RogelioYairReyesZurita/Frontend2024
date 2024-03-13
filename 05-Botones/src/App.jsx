import { useState } from "react"   //1

function App() {
  const [contador,setContador] = useState(0) //2
  
  const handleBotonIncremento = ()=>{
    setContador(contador + 1)               //3
  }

  const handleBotonDecremento = ()=>{
    setContador(contador - 1)               //3
  }

  const handleBotonReset = ()=>{
    setContador(contador - contador)               //3
  }

  return (
    <div>
      <h1>Contador</h1>
      <hr />
      <h2>{contador}</h2>
      <button onClick={handleBotonIncremento}>Incrementar</button> <br /> <br />
      <button onClick={handleBotonDecremento}>Decrementar</button> <br /> <br />
      <button onClick={handleBotonReset}>Resetear</button>
    </div>
  )
}
// siempre se usa useState
export default App
