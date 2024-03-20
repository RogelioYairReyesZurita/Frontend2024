import { useState } from "react"

function App() {

  const [inputsForm,setImputsForm]=useState({
    username:"",
    password:""
  })
// ---------------------------------------------------------------------------------------------------------
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Mi usuario es: ",inputsForm.username)
    console.log("Mi contraseña es: ",inputsForm.password)
    setImputsForm({
      username:"",
      password:""
    })
    
  }

// ----------------------------------------------------------------------------------------------
  const handleInputChange=(event)=>{
    setImputsForm({
      ...inputsForm,
      [event.target.name]:event.target.value
    })
  }

// ----------------------------------------------------------------------------------------------------
  return (
    <div>
      <h1>Input</h1>
      <hr />
    <form onSubmit={(e)=>handleSubmit(e)}>
      {/* ---------------------------------------------------------------------------------- */}
      <divs>
        <label htmlFor="username">Username</label>
        <input 
        id="username" 
        name="username"
        type="text" 
        value={inputsForm.username}
        onChange={(event)=>handleInputChange(event)}
        />
      </divs>
      {/* ---------------------------------------------------------------------------------- */}
      <div>
        <label htmlFor="password">Password</label>
        <input 
        id="password" 
        name="password"
        type="password" 
        value={inputsForm.password}
        onChange={(event)=>handleInputChange(event)}
        />
      </div>
      {/* ---------------------------------------------------------------------------------- */}
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
    </div>
    
  )
}

export default App
