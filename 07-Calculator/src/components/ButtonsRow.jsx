import { Button } from "./Button"

export const ButtonsRow=({row,buttonsFuntions})=>{
    return(
        <tr>
            {
                row.map((button)=>{
                    return (
                        <Button 
                            key={button.label}
                            buttonsFuntions={buttonsFuntions}
                            {...button}
                        />
                    )
                })
            }
        </tr>
    )
}

ButtonsRow.prototype={
    row:'array',
    buttonsFuntions:'object'
}