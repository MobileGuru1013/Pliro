import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		elevation: 1,
		marginTop: 200,
	}
};

export { Card };