import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './../screens/DetailsScreen'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const DetailsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function DetailsStackScreen ({navigation}) {
    return (
      <DetailsStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: "#9e0059"
        }, headerTitleStyle: {
          fontWeight: 'bold'
        }, headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}> 
        <DetailsStack.Screen name = "Details" component = {DetailsScreen} options = {{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size = {25} backgroundColor = "#9e0059"
            onPress = {() => {navigation.openDrawer()}}>
              
            </Icon.Button>
          )
        }}
        />
      </DetailsStack.Navigator>
    )
  }
