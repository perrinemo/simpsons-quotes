import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from './Quotes';
import Lamp from './Lamp';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			working: props.working
		}
	}

	handleClick = () => {
		this.setState({ working: !this.state.working })
	}

	render() {
		const work = this.state.working ? "work" : "break";
		return (
			<div className="App">		
				<img src={logo} className={work} alt="logo" />
				<Lamp />
				<button className={work} onClick={this.handleClick}>
					{work}
				</button>
				<h1 className="App-title">Simpsons Quotes</h1>
				<Quotes />
			</div>
		);
	}
}

export default App;
