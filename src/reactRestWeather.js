import React, { Component } from 'react';
import './App.css';

class App extends Component {

//"weather":[{"id":521,"main":"Rain","description":"shower rain","icon":"09d"}],
//"main":{"temp":-1,"pressure":1006,"humidity":58,"temp_min":-1,"temp_max":-1}

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.state = {
        weather: [],
        temp: 0,
        url: '',
    };
  }

  handleChange(event) {
    this.setState({testi: event.target.value});
  }

fetchWeather() {
  console.log('fetching...');
  //api.openweathermap.org/data/2.5/weather?q={city name}
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.testi +'&APPID=18d96b77b13b65067797156c67492e18&units=metric')
    .then(result => result.json())
    .then(result => this.setState({
          city: 'type city...', 
          weather: result.weather[0],
          temp: result.main.temp,
          url : 'http://openweathermap.org/img/w/' + result.weather[0].icon + '.png',
      })
  );

  console.log(this.state.items);
}

 render() {
    return (
      <div>
		<p>City: </p>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.fetchWeather}>Send</button>
        <p>Temperature: {this.state.temp} Celsius</p>
        <p>Weather:  {this.state.weather.main}</p>
        <img alt="weathericon" src={this.state.url}/>
      </div>
    );
  }
}

export default App;
