import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from './../screens/ProfileScreen'

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen ({navigation}) {
    return (
      <ProfileStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: "#386641"
        }, headerTitleStyle: {
          fontWeight: 'bold'
        }, headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}> 
        <ProfileStack.Screen name = "Profile" component = {ProfileScreen}  options = {{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size = {25} backgroundColor = "#386641"
            onPress = {() => {navigation.openDrawer()}}>
              
            </Icon.Button>
          )
        }} 
        />
      </ProfileStack.Navigator>
    )
  }