import React, {Component} from 'react';
import {View} from 'react-native';

class ViewContainer extends Component {
	render () {
		return (
			<View style = {styles.viewContainer}>
				{this.props.children}
			</View>
		)
	}
}

const styles = ({
	viewContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch"
	}
})

export default ViewContainer