import React, { useState} from 'react'
import './BurgerJoints.css'


function InNOutBurger() {
    const [burgerName, setBurgerName] = useState("____________?")

    const handleChange = e =>{
        setBurgerName(e.target.value)
    }
    return(
        <div className="inNOutContainer"> 
            <h2>In-N-Out Burger</h2>
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

export default InNOutBurger
