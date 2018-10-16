import React, { Component } from 'react';
import './App.css';

import GenerateQuote from './GenerateQuote';
import Quote from './Quote';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: null
		}
	}

	getQuote() {
		fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
		.then(response => response.json())
		.then(data => {
			this.setState({
				quote: data[0]
			})
			
		})
	}

	render() {
		console.log(this.state.quote)
		return (
			<div className="App">		
				<h1 className="App-title">Simpsons Quotes</h1>
				<GenerateQuote selectQuote={() => this.getQuote()} />
				{this.state.quote &&
					<Quote quote={this.state.quote} />
				}
				</div>
		);
	}
}

export default App;
