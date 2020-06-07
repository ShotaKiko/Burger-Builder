import React from 'react'
import './BurgerJoints.css'

const BurgerKing = (props) => (
    <section className="burgerKingContainer">
        <h2>Burger King</h2>
        <h4> Home of the {props.burgerName}</h4>
    </section>
)

export default BurgerKing