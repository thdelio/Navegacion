import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import ExploreScreen from './../screens/ExploreScreen'

const ExploreStack= createStackNavigator();


export default function ExploreStackScreen ({navigation}) {
    return (
      <ExploreStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: "#048ba8"
        }, headerTitleStyle: {
          fontWeight: 'bold'
        }, headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}> 
        <ExploreStack.Screen name = "Details" component = {ExploreScreen} options = {{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size = {25} backgroundColor = "#048ba8"
            onPress = {() => {navigation.openDrawer()}}>
              
            </Icon.Button>
          )
        }}
        />
      </ExploreStack.Navigator>
    )
  }
