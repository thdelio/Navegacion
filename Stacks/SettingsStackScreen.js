import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './../screens/DetailsScreen'
import SettingsScreen from './../screens/SettingScreen'
import SettingScreen from './../screens/SettingScreen';

const SettingStack = createStackNavigator();


export default function SettingStackScreen ({navigation}) {
    return (
      <SettingStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: "#641220"
        }, headerTitleStyle: {
          fontWeight: 'bold'
        }, headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}> 
        <SettingStack.Screen name = "Settings" component = {SettingScreen} options = {{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size = {25} backgroundColor = "#641220"
            onPress = {() => {navigation.openDrawer()}}>
              
            </Icon.Button>
          )
        }}
        />
      </SettingStack.Navigator>
    )
  }