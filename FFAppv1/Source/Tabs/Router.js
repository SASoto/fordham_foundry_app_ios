import React from 'react';
import {View, Image} from 'react-native';
import {TabNavigator, StackNavigator, NavigationActions} from 'react-navigation';

import {ClickMe} from '../Components/Common';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

import App from '../App';

import SplashScreen from './onboarding/splash_screen';
import OnboardScreen from './onboarding/onboarding_screen';
import HomeScreen from '../Tabs/Home/home_screen';
import JobScreen from '../Tabs/Jobs/job_screen';
import JobCreate from './Jobs/JobCreate';
import BubbleScreen from '../Tabs/Bubble/bubble_screen';
import FFBusScreen from '../Tabs/Bubble/ffbus_screen';
import DMScreen from '../Tabs/DandM/dm_screen';
import LoginScreen from '../Tabs/Login/login_screen';
import SignupScreen from './onboarding/signup_screen';
import LogoutScreen from '../Tabs/Login/logout_screen';

export const Splash_Stack = StackNavigator ({
	Splash: {
		screen: SplashScreen
	}
})

export const Onboard_Stack = StackNavigator ({
	Onboard: {
		screen: OnboardScreen,
    	navigationOptions: {
			headerStyle: {
       			backgroundColor: '#F5FCFF',
				borderBottomWidth: 0,
				elevation: null
       		}
  		}	
	},
	Login: {
		screen: LoginScreen,
	},
	Signup: {
		screen: SignupScreen,
		navigationOptions: {
			headerVisible: false,
  		}
	} 

}, {
	initialRouteName: 'Onboard',
	headerMode: 'none',
	navigationOptions: {
    	gesturesEnabled: false,
	}
	//mode: 'modal'
	/*transitionConfig: () => ({
	   screenInterpolator: (props) => {
	       return fade(props)
}})*/
});

export const FFBusStack = StackNavigator ({
	Bubble: {
		screen: BubbleScreen,
		navigationOptions: {
			headerTitle:
				<Image source = {require('../../Images/foundry-logo-top-bar.png')}
				 style = {{height:40, width: 190, marginBottom: 20}}/>
				,
			headerStyle: {
       			backgroundColor: '#f7f7f8',
       			elevation: null
       		},
       		headerTitleStyle: {
  				fontSize: 20

  				
  			},
  			headerBackStyle: {
  				color: 'red'
  			},
	},
},
	FFBus: {
		screen: FFBusScreen,
		navigationOptions: {
			headerTitle: 'Foundry Businesses',
			headerStyle: {
       			backgroundColor: '#f7f7f8',
       			elevation: null
       		},
       		headerTitleStyle: {
       			width: 214,
  				fontSize: 25,
  				fontFamily: 'GillSans',
  				color: 'black',
  				paddingBottom: 20
  			},
  			headerTintColor: 'maroon'
  		}
	}     		    		
});

export const JobStack = StackNavigator ({
	Jobs: {
		screen: JobScreen,
		navigationOptions: {
			headerTitle: 
			<View>
			<View flex = {1} justifyContent = 'center' flexDirection = 'row' marginBottom = {60}>
			<Image source = {require('../../Images/foundry-logo-top-bar.png')} 
				style = {{height:40, width: 190}}/>
			</View>
			</View>,
			headerStyle: {
       			backgroundColor: '#f7f7f8',
       			elevation: null
       		},
       		headerTitleStyle: {
  				fontSize: 20	
  			},
  			headerBackStyle: {
  				color: 'red'
  			},
  			
  			
  		},
  	},

  	JCForm: {
  		screen: JobCreate,
		navigationOptions: {
			headerTitle: <Image source = {require('../../Images/foundry-logo-top-bar.png')} 
				style = {{height:40, width: 150, marginBottom: 20}}/>,
			headerStyle: {
       			backgroundColor: '#f7f7f8',
       			elevation: null
       		},
       		headerTitleStyle: {
       			width: 214,
  				fontSize: 20,
  				fontFamily: 'GillSans',
  				color: 'black',
  				paddingBottom: 20
  			},
  			headerTintColor: 'maroon'
  		}
  	}	
});

export const Foundry_App = TabNavigator ({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-home":"ios-home-outline"} size = {32} color = {focused? "darkred":"black"}/>
			}
		},

	Jobs: {
		screen: JobStack,
		navigationOptions: {
			tabBarLabel: 'Jobs',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-briefcase":"ios-briefcase-outline"} size = {32} color = {focused? "darkred":"black"}/>
		}
	},
	
	Bubble: {
		screen: FFBusStack,
		navigationOptions: {
			tabBarIcon: ({focused}) => <Image source = {focused ? require('../../Images/bubbleclicked.png'):require('../../Images/bubbleiconnot.png')} style = {{height: 45, width: 35}}/>
		}
	},

	DandMScreen: {
		screen: DMScreen,
		navigationOptions: {
			tabBarLabel: 'DandM',
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-people": "ios-people-outline"} size = {38} color = {focused? "darkred":"black"}/>
		}
	},

	Logout: {
		screen: LogoutScreen,
		navigationOptions: {
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-lock": "ios-lock-outline"} size = {34} color = {focused? "darkred":"black"}/>
			
		}
	}

},

	{ 
		initialRouteName: 'Logout',
		navigationOptions: {
        	gesturesEnabled: false,
    	},
		tabBarOptions: {
			showLabel: false,
			iconColor: "white",
			style: {
			backgroundColor: '#ededee',
			}
		}
	}
);

export const AppStack = StackNavigator ({
	Splash: {
		screen: SplashScreen
	},
	SignedIn: {
		screen: Foundry_App,
	},
	SignedOut: {
		screen: Onboard_Stack,
	},
},
	{
		initialRouteName: 'Splash',
		headerMode: "none",
		//mode: "modal",
		navigationOptions: {
        	gesturesEnabled: false,
    	}
	}
);

// const prevGetStateForActionAppStack = AppStack.router.getStateForAction;

// AppStack.router.getStateForAction = (action, state) => {
//     if (state && action.type === 'ReplaceCurrentScreen') {
//       const routes = state.routes.slice(0, state.routes.length - 1);
//       routes.push(action);
//       return {
//         ...state,
//         routes,
//         index: routes.length - 1,
//       };
//     }
//     return prevGetStateForActionAppStack(action, state);
//}

/*const INITIAL_STATE = AppStack.router.getStateForAction(NavigationActions.init())*/

// this is pretty much a standard reducer, but it looks fancy
// all it cares about is "did the navigation stack change?"    
// if yes => update the stack
// if no => pass current stack through
/*export default (state = INITIAL_STATE, action) => {
    const nextState = AppStack.router.getStateForAction(action, state)

    return nextState || state
}*/

const styles = ({
	navBarView: {
		height: 64,
	},
	titleStyle: {
		flex:1,
		justifyContent: 'center',
		marginTop: 12,
		flexDirection: 'row',
		
	},
	infoButton: {
		marginRight: 80,
		marginBottom: 12,
    	flexDirection: 'row',
    	alignItems: 'center',
    	justifyContent: 'flex-end',
	}
})