import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LeftMenu from './components/menu/MenuWrapped';
import RouterComponent from './Router';

class App extends Component {
	render () {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LeftMenu>
					<RouterComponent />
				</LeftMenu>
			</Provider>
		);
	}
}

export default App;