import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';

const RouterComponent = (props) => {
	return (
			<Router>
					<Scene key='home' component={Home} hideNavBar={true}/>
			</Router>
	);
};

export default RouterComponent;