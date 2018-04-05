import React, {Component} from 'react';
import {View, TouchableOpacity, Linking} from 'react-native';
import call from 'react-native-phone-call';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

class MediaButtons extends Component {
	render() {
		const args = {
			number: '7188175660',
			prompt: true
		};

		return (
			<View style = {styles.socialM}>
			<TouchableOpacity onPress = {() => call(args)}>
				<FontIcon name = "phone" size = {30}/>
			</TouchableOpacity>
			<TouchableOpacity onPress = {() => Linking.openURL('http://www.fordhamfoundry.org')}>
				<IonIcon name = "md-globe" size = {30}/>
			</TouchableOpacity>
			<TouchableOpacity onPress = {() => Linking.openURL('mailto:fordhamfoundry@fordham.edu')}>
				<MatIcon name = "mail-outline" size = {32}/>
			</TouchableOpacity>
			<TouchableOpacity onPress = {() => Linking.openURL('https://twitter.com/FordhamFoundry')}>
				<IonIcon name = "logo-twitter" size = {30}/>
			</TouchableOpacity>
			<TouchableOpacity onPress = {() => Linking.openURL('https://www.instagram.com/fordhamfoundry')}>
				<IonIcon name = "logo-instagram" size = {30}/>
			</TouchableOpacity>
			<TouchableOpacity onPress = {() => Linking.openURL('https://www.facebook.com/fordhamfoundry/')}>
				<IonIcon name = "logo-facebook" size = {30}/>
			</TouchableOpacity>
			</View>
			);
	}
}

const styles = ({
	socialM: {
		paddingLeft: 10,
		paddingRight: 10,
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: 'lightgrey',
	}
})

export default MediaButtons;