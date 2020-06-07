import React from 'react'
import './BurgerJoints.css'

const McDonalds = props => (
    <section className="mcdonaldsContainer">
        <h2>
            McDonald's
        </h2>
        <h4>
            Home of the {props.burgerName}   
        </h4>
    </section>
)

export default McDonalds