import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './../screens/DetailsScreen'
import SupportScreen from './../screens/SupportScreen'

const SupportStack = createStackNavigator();


export default function SupportStackScreen ({navigation}) {
    return (
      <SupportStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: "#1d4e89"
        }, headerTitleStyle: {
          fontWeight: 'bold'
        }, headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}> 
        <SupportStack.Screen name = "Support" component = {SupportScreen} options = {{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size = {25} backgroundColor = "#1d4e89"
            onPress = {() => {navigation.openDrawer()}}>
              
            </Icon.Button>
          )
        }}
        />
      </SupportStack.Navigator>
    )
  }