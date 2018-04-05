import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {ClickMe, Confirm} from '../Common';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

class NavBar extends Component {
	render() {
		return (
			<View style = {styles.navBarBackground}>
			
			
			<View style = {styles.titleStyle}>
			<Image source = {require('../../../Images/foundry-logo-top-bar.png')}
				style = {{height:40, width: 190}}
			/>
			</View>
			
			
			</View>
			);
	}
}

const styles = ({
	navBarBackground: {
		backgroundColor: "#f7f7f8",
		//flexDirection: 'row',
		height: 64,
		//alignItems: 'center',
		//justifyContent: 'center'
		
	},
	titleStyle: {
		flex:1,
		justifyContent: 'center',
		marginTop: 12,
		flexDirection: 'row',
		
	},
	infoButton: {
		//flex:1,
		marginRight: 60,
		marginBottom: 14,
    	flexDirection: 'row',
    	alignItems: 'center',
    	justifyContent: 'flex-end',
	}
});

export default NavBar