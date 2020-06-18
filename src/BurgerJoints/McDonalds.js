import React, { useState } from 'react'
import './BurgerJoints.css'

function McDonalds() {
    const [burgerName, setBurgerName] = useState("________________?")

    const handleChange = e =>{
        setBurgerName(e.target.value)
    }
    return(
        <div className="CarlsContainer"> 
            <h2>McDonald's</h2>
            <h4>Home of the {burgerName}</h4>

            <input
                className="burgerNameInput" 
                type="text"
                name="burgerName"
                onChange={handleChange}
                placeholder="Signature Burger Name"
            />
        </div> 
    )
}
   


export default McDonalds