import { useForm } from "../../Hooks/UseForm"
const SearchCity=({cities, setCities})=> {
    const [values,handleInputChange,reset]=useForm({
        city:''
})

const handleSearchCity=()=>{
    const newCities=[...cities,values.city]
    setCities(newCities)
    reset()
}
  return (
    <div className="input-group">
        <span className="input-group-text" >City</span>
        <input 
        className="form-control"
        id="city"
        name="city"
        onChange={handleInputChange}
        type="text" 
        value={values.city}
        />
        <button 
        className="btn btn-primary"
        onClick={handleSearchCity} 
        type="button"
          >Search</button>
    </div>
  )
}

export default SearchCity