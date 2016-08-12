import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
	render() {
		return (			
			<nav className="navbar navbar-light bg-faded">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">Navbar</Link>
					</div>

					<div className="collapse navbar-toggleable-xs">
						<ul className="nav navbar-nav pull-xs-right">
							<li className="nav-item">
								<Link to="/route1" className="nav-link">SimpleComponentLink</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}