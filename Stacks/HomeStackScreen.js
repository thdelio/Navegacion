import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './../screens/HomeScreen'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const DetailsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function HomeStackScreen ({navigation}) {
    return (
      <HomeStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: "#480ca8"
        }, headerTitleStyle: {
          fontWeight: 'bold'
        }, headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}> 
        <HomeStack.Screen name = "Home" component = {HomeScreen}  options = {{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size = {25} backgroundColor = "#480ca8"
            onPress = {() => {navigation.openDrawer()}}>
              
            </Icon.Button>
          )
        }} 
        />
      </HomeStack.Navigator>
    )
  }