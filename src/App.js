import React from 'react';
import './App.css';

import Header from './header.js'
import BurgerKing from './BurgerJoints/BurgerKing';
import McDonalds from './BurgerJoints/McDonalds';
import Wendys from './BurgerJoints/Wendys';
import Whataburger from './BurgerJoints/Whataburger';
import InNOutBurger from './BurgerJoints/InNOutBurger';
import CarlsJr from './BurgerJoints/CarlsJr';
import RedRobin from './BurgerJoints/RedRobin';
import WhiteCastle from './BurgerJoints/WhiteCastle';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="retaurantContainer">
        <BurgerKing burgerName={"Whopper!"} />
        <McDonalds burgerName={"Big Mac!"} />
        <Wendys burgerName={"Square Burgers!"} />
        <Whataburger />
        <InNOutBurger />
        <CarlsJr />
        <RedRobin />
        <WhiteCastle />
      </div>
    </div>
  );
}

export default App;
