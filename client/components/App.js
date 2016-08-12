import React, { Component } from 'react';
import NavBar from './nav_bar';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}