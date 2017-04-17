import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Moro {this.state.name}</h1>
            
                
                <h1>Moro {this.state.value}</h1>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            
                
                <form onSubmit={this.handleSubmit}>
                    <p>Painiketta klikattu {this.state.count} kertaa</p>
                    <button onClick={this.handleSubmit}>Klik meh!</button>
                </form>

            </div>
          
        );
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({count: this.state.count + 1});
    }
    
    constructor(props){
        super(props);
        this.state = {name:'', value:'', count:0};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    componentDidMount(){
        this.setState({
            name:'Pingpong'
            //count:6
        });
    }
}

export default App;
