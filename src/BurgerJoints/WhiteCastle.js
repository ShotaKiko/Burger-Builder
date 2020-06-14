import React from 'react'
import './BurgerJoints.css'

class WhiteCastle extends React.Component{
    state = {
        info: {
            burgerName:"___________________?",
        }
    }

    handleChange = event => {
        this.setState({
            info: {
                ...this.state.info,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(
            <div className="whiteCastleContainer"> 
                <h2>WhiteCastle</h2>
                <h4>Home of the {this.state.info.burgerName}</h4>

                <input
                    className="burgerNameInput" 
                    type="text"
                    name="burgerName"
                    // value={this.state.info.burgerName}
                    onChange={this.handleChange}
                    placeholder="Signature Burger Name"
                />
            </div>
        )
    }
}

export default WhiteCastle