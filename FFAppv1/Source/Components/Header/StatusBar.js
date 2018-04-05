import React, {Component} from 'react';
import {View} from 'react-native';

class StatusBarbg extends Component {
	render() {
		return (
			<View style = {styles.statusBarBackground}>
			</View>
			);
	}
}

const styles = ({
	statusBarBackground: {
		height: 20,
		backgroundColor: "#f7f7f8"
	}
});

export default StatusBarbg