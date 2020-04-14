import React from 'react';
import axios from 'axios'
// import logo from '../../static/logo.svg';
import css from './Test.module.css';

const App = (props) => {
  const [buttonPressed, setButton] = React.useState(0)
  const [color, changeColor] = React.useState({
    color: 'black',
    background: 'gray',
  })
  const [image, setImage] = React.useState(null)
  // const [lyrics, setlyrics] = React.useState(null)
  // const [drinks, setDrinks] = React.useState(null)

  // const useState = (value) => {
  //   let value = value
  //   // does something with the value
  //   return [value, (something) => {value = something}]
  // }

  React.useEffect(() => {
    if (buttonPressed % 2 === 0) {
      console.log('HELLO')
    }
  }, [buttonPressed])

  React.useEffect(() => {
    // getLyrics()
    // getDrinks()
    getCards()
    // fakeGetUser()
  }, [])

  // React.useEffect(() => {
  //   // console.log('lyrics----', lyrics)
  //   console.log('!!!!!!!!!!!!!!!!', drinks)
  // }, [/*lyrics*/ drinks])

  // ==========================================
  // H1 Tag: drink name
  // UL -> LI: drink ingredients
  // ==========================================

  const getCards = async () => {
    try {
      const cardFetch = await axios.get('https://api.scryfall.com/cards?page=3')
      const nameItVeryPoorly = cardFetch.data.data[0].image_uris.normal
      setImage(nameItVeryPoorly)
      const emilyKeys = Object.keys(nameItVeryPoorly)
      console.log(nameItVeryPoorly[emilyKeys[5]])
      console.log('WE GOT A RESPONSE PARTY TIME AT ALLAN\'S HOUSE')
      console.log('THE TIME HAS PASSED ALLAN WONT LET US IN')
      console.log('HOORAY IM IN ALLAN\'S HOUSE, IN MY DREAMS :(')
    } catch (err) {
      console.log('------', err)
    }
  }

  // const fakeGetUser = () => {
  //   axios.get('https://api.scryfall.com/cards?page=3')
  //     .then(function (response) {
  //       // handle success
  //       console.log('WE GOT A RESPONSE PARTY TIME AT ALLAN\'S HOUSE');
  //       setTimeout(() => {
  //         console.log('THE TIME HAS PASSED ALLAN WONT LET US IN')
  //       }, 3000)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //   console.log('HOORAY IM IN ALLAN\'S HOUSE, IN MY DREAMS :(')
  // }

  // const getLyrics = async () => {
    // try {
    //   const response = await axios.get('https://api.lyrics.ovh/v1/rence/type%202')
    //   // post request does not actually work
    //   // const response = await axios.post('https://api.lyrics.ovh/v1/rence/type%202', {newLyrics: 'blah blah blah'})
    //   setlyrics(response.data.lyrics)
    //   console.log('response----', response.data)
    // } catch (err) {
    //   console.log('======', err)
    // }
  // }

  // const getDrinks = async () => {
    // try {
    //   const resp = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    //   setDrinks(resp.data.drinks)
    // } catch (err) {
    //   console.log('=====', err)
    // }

    // const arr = new Array(15).fill('0')
    // const arr = "0".repeat(15).split("")
    // console.log('************', arr)
  // }

  const onButtonClick = () => {
    setButton(buttonPressed +1)
    changeColor({
      color: 'red',
      background: 'purple',
    })
  }

  const renderImage = () => {
    if (image) {
      return <img src={image} />
    }
    return <React.Fragment />
  }

  return (
    <div className={css.container} style={{ color: color.color, backgroundColor: color.background }}>
      <h1 className={css.header}>This is a test</h1>
      {renderImage()}
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/WIKqgE4BwAY" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      <p className={css.text}>lorem ipsum gfufufufufufufuifyu hu uygv7tigy hb7byuhh uyu khucv.</p>
      <button className={css.button} onClick={onButtonClick}>This is a button</button>
      <h1>The button was pressed {buttonPressed} times</h1>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     state={
//       buttonPressed: 0
//     }

//     this.buttonPressed = this.state.buttonPressed.bind(this)
//   }

//   componentDidMount(){
//     setTimeout(() => {
//       console.log(this.state.buttonPressed)
//     }, 3000)
//   }



//   render() {
//     return (
//       <div className={`${css.container} ${css.blueText}`}>
//         <h1 className={css.header}>This is a test</h1>
//         <p className={css.text}>lorem ipsum gfufufufufufufuifyu hu uygv7tigy hb7byuhh uyu khucv.</p>
//         <button 
//           className={css.button} 
//           onClick={() => {
//             this.setState({
//               buttonPressed: this.state.buttonPressed + 1
//             }
//           )}}
//         >
//           This is a button
//         </button>
//         <h1>The button was pressed {this.state.buttonPressed} times</h1>
//       </div>
//     )
//   }
// }

export default App;