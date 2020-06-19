import React from 'react'


const Pizzeria = props => {
    return(
        <div className="pizzeria" onClick={props.click}>
            <h3>{props.name}</h3> - <p className="motto">"{props.motto}"</p>
            <button onClick={props.click}>Remove</button>
        </div>
    )
}

export default Pizzeria