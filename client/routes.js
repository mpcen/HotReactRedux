import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SimpleComponent from './components/SimpleComponent';
import Route1 from './components/Route1';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SimpleComponent} />
		<Route path="route1" component={Route1} />
	</Route>
);