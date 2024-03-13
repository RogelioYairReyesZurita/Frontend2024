import { buttonsClasses } from "../assets/buttonsClasses"
export const Button = ({
  class:buttonsClass,
  label,
  funtion: buttonFuntion,
  columns,
  buttonsFuntions
}) => {
  return (
    <td colSpan={columns}>
    <button 
        type='button'     
        className={buttonsClasses[buttonsClass]} 
        onClick={()=>buttonsFuntions[buttonFuntion](label)}
        >
           {label}
    </button></td>
  )
}

Button.prototype={
  class:'String',
  label:'String',
  funtion:'String',
  columns:'number',
  buttonsFuntions:'object'
}