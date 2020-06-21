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

    removePizzeriaHandler = (pizzeriaId) => {
        const newPizzaList = [ ...this.state.pizzaParlors]
        newPizzaList.splice(pizzeriaId, 1)
        this.setState({pizzaParlors: newPizzaList})
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
                            click={() => this.removePizzeriaHandler(id)}
                            key={pizzeria.id} 
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
                <button className="pizzaButton" style={styling} onClick={this.clickHandler}>See the pizza</button>
                <div>
                    {pizzaSection}
                </div>
            </div>
        )
    }
}

export default PizzaJoints