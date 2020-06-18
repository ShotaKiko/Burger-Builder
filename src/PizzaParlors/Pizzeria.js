import React from 'react'


const Pizzeria = props => {
    return(
        <div className="pizzeria">
            <h3>{props.name}</h3> - <p className="motto">"{props.motto}"</p>
        </div>
    )
}

export default Pizzeria