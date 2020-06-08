import React from 'react'
import './BurgerJoints.css'

const Wendys = props => (
    <section className="wendysContainer">
        <h2>
            Wendy's
        </h2>
        <h4>
            Home of the {props.burgerName}   
        </h4>
    </section>
)

export default Wendys