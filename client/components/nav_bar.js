import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
	render() {
		return (			
			<div className="row">
				<nav className="navbar navbar-light bg-faded">
					<div className="container">
						<div className="navbar-header">
							<Link to="/" className="navbar-brand">React App</Link>
						</div>

						<div className="collapse navbar-toggleable-xs">
							<ul className="nav navbar-nav pull-xs-right">
								<li className="nav-item">
									<Link to="/signup" className="nav-link">Sign up</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}