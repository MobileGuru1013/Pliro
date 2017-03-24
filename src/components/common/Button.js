import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, signinOrSignupButtonPressed, style }) => {
	const { buttonStyle, textStyle, pressedButtonStyle } = styles;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={ signinOrSignupButtonPressed ? [pressedButtonStyle, style] : [buttonStyle, style] }
		>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#6d6d6d',
		fontSize: 18,
		fontWeight: '800',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
	},
	pressedButtonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		borderBottomWidth: 5,
		borderBottomColor: "#d8d8d8"
	}
};

export { Button };