import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

class PanelToView extends Component{
    constructor(props) {
        super(props)
        this.state = {       
            title: props.title,
        };
    }

    render(){
        return ( 
        <TouchableHighlight onPress = {() => this.props.wayto.navigate('FFBus')}
                        style={styles.button} 
                        underlayColor="#f1f1f1">
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.state.title}</Text>
                        
                </View>
            </View>
        </TouchableHighlight>
        );
    }
}

var styles = ({
    container   : {
        backgroundColor: 'maroon',
        margin:10,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'white',
        fontSize: 25,
        fontFamily: "GillSans"
    }
});

export default PanelToView;