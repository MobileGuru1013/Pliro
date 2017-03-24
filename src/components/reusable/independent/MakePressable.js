import React from 'react';
import { TouchableOpacity } from 'react-native';

const MakePressable = (props) => (
	<TouchableOpacity {...props}>
		{props.children}
	</TouchableOpacity>
);

export default MakePressable;
