import React, { useState } from 'react'
import './BurgerJoints.css'

function BurgerKing () {
    const [burgerName, setBurgerName] = useState("______________?")

    const handleChange = e => {
        setBurgerName(e.target.value)
    }
    return(
        <section className="burgerKingContainer">
            <h2>Burger King</h2>
            <h4> Home of the {burgerName}</h4>

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

export default BurgerKing