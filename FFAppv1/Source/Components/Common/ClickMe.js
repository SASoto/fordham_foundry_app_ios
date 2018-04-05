import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

//Component for making other components/tags
const ClickMe = ({onPress, children}) => {

		return (
			//any component or tag inside ClickEmail will be displayed
			//TouchableOpacity allows for other compenents/tags to be clickable
			//any onPress action or function will be passed to ClickEmail and work as normal
			<TouchableOpacity onPress = {onPress}>
			{children}
			</TouchableOpacity>
			)
}

export {ClickMe};