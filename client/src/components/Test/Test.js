import React from 'react';
// import logo from '../../static/logo.svg';
import css from './Test.module.css';

const App = (props) => {
  const [buttonPressed, setButton] = React.useState(0)
  const [color, changeColor] = React.useState({
    color: 'black',
    background: 'gray',
  })

  React.useEffect(() => {
    if (buttonPressed % 2 === 0) {
      console.log('HELLO')
    }
  }, [buttonPressed])

  const onButtonClick = () => {
    setButton(buttonPressed +1)
    changeColor({
      color: 'red',
      background: 'purple',
    })
  }

  return (
    <div className={css.container} style={{ color: color.color, backgroundColor: color.background }}>
      <h1 className={css.header}>This is a test</h1>
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

  // componentDidMount(){
  //   setTimeout(() => {
  //     console.log(this.state.buttonPressed)
  //   }, 3000)
  // }



  // render() {
  //   return (
      // <div className={`${css.container} ${css.blueText}`}>
      //   <h1 className={css.header}>This is a test</h1>
      //   <p className={css.text}>lorem ipsum gfufufufufufufuifyu hu uygv7tigy hb7byuhh uyu khucv.</p>
      //   <button 
      //     className={css.button} 
      //     onClick={() => {
      //       this.setState({
      //         buttonPressed: this.state.buttonPressed + 1
      //       }
      //     )}}
      //   >
      //     This is a button
      //   </button>
      //   <h1>The button was pressed {this.state.buttonPressed} times</h1>
      // </div>
//     )
//   }
// }

export default App;