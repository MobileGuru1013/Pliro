import React from "react";
import { View, Text } from "react-native";

const CardItem = (props) => {
	return (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		padding: 10,
		justifyContent: "flex-start",
		alignItems: 'center',
		flexDirection: "row",
		position: "relative",
	}
};

export { CardItem };