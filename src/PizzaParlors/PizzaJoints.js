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
        showPizza: false
    }

    clickHandler = () => {
        const showComponent = this.state.showPizza
        this.setState({
            showPizza: !showComponent
        })
    }

    
    render(){
        const styling ={
            border:"2px solid red",
            color:"whitesmoke",
            backgroundColor:"steelblue"
        }

        let pizzaSection = null;
        

        if (this.state.showPizza) {
            pizzaSection = (
                <div className="pizzasRendered">
                    
                    {this.state.pizzaParlors.map((pizzeria, id) => {
                        return <Pizzeria 
                            name={pizzeria.name}
                            motto={pizzeria.motto}
                        />
                    })} 
                </div>
            )
            styling.backgroundColor = "green"
        }
        return(
            <div className="pizzeriaContainer">
                <button style={styling} onClick={this.clickHandler}>See the pizza</button>
                {pizzaSection}
            </div>
        )
    }
}

export default PizzaJoints