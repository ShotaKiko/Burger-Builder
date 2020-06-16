import React from 'react'


const Pizzeria = props => {
    return(
        <div className="pizzeria">
            <h3>{props.name} - "{props.motto}"</h3>
        </div>
    )
}

export default Pizzeria