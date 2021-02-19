import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'

const Rootstack = createStackNavigator()

export default function RootstackScreen({navigation}) {
    return (
        <Rootstack.Navigator headerMode = 'none'>
            <Rootstack.Screen name = "SplashScreen" component = {SplashScreen}/>
            <Rootstack.Screen name = "SignInScreen" component = {SignInScreen}/>
            <Rootstack.Screen name = "SignUpScreen" component = {SignUpScreen}/> 

        </Rootstack.Navigator>
    )
}