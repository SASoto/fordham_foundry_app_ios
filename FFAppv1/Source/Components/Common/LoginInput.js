import React from 'react';
import {TextInput, View, Text} from 'react-native';

const LoginInput = ({label, value, onChangeText, placeholder, secureText, multiline}) => {
	const {inputStyle, labelStyle, containerStyle} = styles

	return (
		<View style = {containerStyle}>
			<Text style = {labelStyle}>{label}</Text>
			<TextInput
				autoCapitalize = 'none'
				secureTextEntry = {secureText}
				placeholder = {placeholder}
				autoCorrect = {false}
				style = {inputStyle}
				value = {value}
				onChangeText = {onChangeText}
			/>
		</View>
		);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 35,
		width: 200,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	},
	labelStyle: {
		flex: 1,
		fontSize: 18,
		paddingLeft: 20,
	},
	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		height: 40,
		alignItems: 'center'
	}
}

export {LoginInput};