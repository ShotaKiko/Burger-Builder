import React from 'react'
import Pizzeria from './Pizzeria'
import './PizzaJoints.css'

class PizzaJoints extends React.Component{
    state = {
        pizzaParlors: [
            {id:"pizza1", name:"Pizza Hut", motto:"No one out pizzas the Hut." },
            {id:"pizza2", name:"Dominos", motto:"It's what we do."},
            {id:"pizza3", name:"Cici's", motto:"Pizza Pizza."}
        ],
        showPizzerias: false
    }

    render(){
        return(
            <div className="pizzeriaContainer">
                {this.state.pizzaParlors.map((pizzeria, id) => {
                    return <Pizzeria 
                        name={pizzeria.name}
                        motto={pizzeria.motto}
                    />
                })} 
            </div>
        )
    }
}

export default PizzaJoints