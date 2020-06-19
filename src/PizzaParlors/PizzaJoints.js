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
            color:"whitesmoke",
            backgroundColor:"steelblue",
            width:"10%",
            height:"40px"
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
        
        let pizzaStyling = []
        if (this.state.pizzaParlors.length >= 3 ) {
            pizzaStyling.push("fullList")
        }
        if (this.state.pizzaParlors.length <= 2) {
            pizzaStyling.push("partialList")
        }

        return(
            <div className="pizzeriaContainer">
                <button className="pizzaButton" style={styling} onClick={this.clickHandler}>See the pizza</button>
                <div className={pizzaStyling}>
                    {pizzaSection}
                </div>
            </div>
        )
    }
}

export default PizzaJoints