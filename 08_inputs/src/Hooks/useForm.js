import { useState } from "react"

export const useForm=(inicialState={})=>{

    const [values,setValues]=useState(inicialState)
    // -----------------------------------------------------------------------------
    const handleInputChange = ({target})=>{
        setValues({
            ...values,
            [target.name]:target.value
        })
    }
// ----------------------------------------------------------------------------------------
    const reset =()=>{
        setValues(inicialState)
    }
    return[values,handleInputChange,reset]
}
