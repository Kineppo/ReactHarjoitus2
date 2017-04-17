import React, { Component } from 'react';
import './App.css';

var KIRJASTOT = [
];

class App extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchKirjastot = this.fetchKirjastot.bind(this);
    this.state = {
        city: 'Porvoo',
    };
	this.fetchKirjastot();
  }
  

  handleChange(event) {
    this.setState({city: event.target.value});
  }

fetchKirjastot() {
  console.log('fetching...');
  fetch('https://api.kirjastot.fi/v3/library?city.name='+ this.state.city)
    .then(result => result.json())
    .then(result => { 
		var num = result.items.length;
        KIRJASTOT=[];
        for(var i =0;i<num;i++){
		KIRJASTOT.push({nimi:result.items[i].short_name.fi,www:result.items[i].homepage.fi});
        }
		this.setState({kirjasto: 'kirjasto'});
    })
}

 render() {
    return (
      <div>
		<p>Kirjoita kaupungin nimi josta kirjastot haetaan: </p>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.fetchKirjastot}>Hae kirjastot</button>
        <KirjastoTable data={KIRJASTOT}/>
      </div>
    );
  }
}

class KirjastoTable extends Component{
	render(){
		var rows = this.props.data.map(item =>
			<Kirjasto item={item}/>
		);
		
		return(
			<table>
				<thead>
					<tr>
						<th>Nimi</th>
						<th>www sivut</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class Kirjasto extends Component{
	render(){
		return(
			<tr>
				<td>{this.props.item.nimi}</td>
				<td>{this.props.item.www}</td>
			</tr>
		)
	}
	
}

export default App;
