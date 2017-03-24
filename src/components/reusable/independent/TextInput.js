import React from 'react';
import { Kohana } from 'react-native-textinput-effects';

export default ({ iconClass, iconName, iconColor, label, onChangeText, value }) => {
	return (
		<Kohana
			style={{ backgroundColor: 'white',}}
			label={label}
			iconClass={iconClass}
			iconName={iconName}
			iconColor={iconColor}
			labelStyle={{ color: '#02c773' }}
			inputStyle={{ color: 'black', fontSize: 18 }}
			onChangeText={onChangeText}
			value={value}
			selectTextOnFocus={true}
			onBlur={()=> console.log( 'ENDDDDDDDD',  )}
		/>
	)
};
