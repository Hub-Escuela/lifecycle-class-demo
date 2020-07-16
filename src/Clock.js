import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    updateTime = () => {
        this.setState({date: new Date()});
    }

    componentDidMount() {
        console.log("Clock se ha montado");
        this.intervalId = setInterval(()=> {
            this.setState({date: new Date()});
            console.log("Se ha ejecutado el intervalo");
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Clock se ha actualizado");
    }

    componentWillUnmount() {
        console.log("Clock se va a desmontar");
        clearInterval(this.intervalId);
    }

    render() {

    return (
        <div style={{padding:'20px',border:'2px black solid'}}>
        <h1>Soy una clase</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.updateTime}>Actualizar</button>
        </div>
    );
    }
}

export default Clock;