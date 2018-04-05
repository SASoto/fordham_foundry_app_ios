import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {ClickMe, InfoModal} from '../Common';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

class JobscreenNav extends Component {
	render() {
		return (
			<View style = {styles.navBarBackground}>
			<View style = {styles.titleStyle}>
			<Image source = {require('../../../Images/foundry-logo-top-bar.png')}
				style = {{height:40, width: 190}}
			/>
			</View>
			<View style = {styles.infoButton}>
			<ClickMe onPress = {() => customInfo()}>
				<MatIcon name = "info-outline" color = "#0981CC" size = {35}/>
			</ClickMe>
			</View>

			<InfoModal 
				visible={this.state.showInfoModal}
				onReturn={this.onReturn.bind(this)}
			>
					<Text> poop </Text>
			</InfoModal>
			
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

export default JobscreenNav