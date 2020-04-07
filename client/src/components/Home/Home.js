import React from 'react';
import logo from '../../static/logo.svg';
import '../../Containers/App.css';
import axios from 'axios';
import {range} from 'pythonic';

const list = [
  "shark",
  "nado",
  "boom!"
]

const App = () => {
  React.useEffect(() => {
    getDrinks()
  },[])

  const [drinks, setDrinks] = React.useState([])
  
  const getDrinks = async () => {
    const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    const drink = response.data.drinks
    setDrinks(response.data.drinks)
    // const drinking = response.data.strIngredients
    // drink.forEach((singleDrink) => {
    //   console.log(singleDrink)
    // })
  }

  return (
    <React.Fragment>
      <div className="App">
        <div>
            {drinks.map((item) => (
              <React.Fragment>
                <h1>{item["strDrink"]}</h1>
                <h2>{item["strIngredient1"]}</h2>
              </React.Fragment>
            ))}
            {drinks.map((item) => {
              console.log(']]]]]]]]]', item)
              const arr = []
              arr.length = 15
              arr.fill('blah')
              const arr2 = range(15)
              console.log('[[[[[[[[', arr)
              return arr.map((itm2, idx) => {
                return <h2>{item[`strIngredient${idx+1}`]}</h2>
              })
            })}
            <p>HOME ROUTE</p>
            <img src={logo} alt="logo" />
            <p>I USED TO BE ABLE TO EAT PIZAA ALOT :(</p>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
      </div>
      <div>
        <p>hi</p>
      </div>
    </React.Fragment>
  );
}

export default App;