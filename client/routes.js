import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SimpleComponent from './components/SimpleComponent';
import SignupPage from './components/signup/SignupPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SimpleComponent} />
		<Route path="signup" component={SignupPage} />
	</Route>
);