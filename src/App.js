import React from 'react';
import './App.css';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showClock: false};
  }

  enableClock = () => {
    this.setState({showClock : !this.state.showClock});
  }

  componentDidMount() {
    console.log("App se ha montado");
  }

  componentDidUpdate() {
      console.log("App se ha actualizado");
  }

  componentWillUnmount() {
      console.log("App se va a desmontar");
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.enableClock}>Mostrar reloj</button>
        {this.state.showClock && <Clock />}
      </div>
    );
  }
}

export default App;
