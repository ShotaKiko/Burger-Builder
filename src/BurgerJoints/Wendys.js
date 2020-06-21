import React, { useState } from 'react'
import './BurgerJoints.css'

function Wendys () {
    const [burgerName, setBurgerName] = useState("____________?")
    
    const handleChange = e =>{
        setBurgerName(e.target.value)
    }    
    
    return(
        <section className="wendysContainer">
            <h2>
                Wendy's
            </h2>
            <h4>
                Home of the {burgerName}   
            </h4>

            <input 
                className="burgerNameInput"
                type="text"
                name="burgerName"
                onChange={handleChange}
                placeholder="Signature Burger Name"
            />

        </section>
    )
}

export default Wendys