import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import BookmarksScreen from './../screens/BookmarksScreen'


const BookmarksStack = createStackNavigator();


export default function BookmarksStackScreen ({navigation}) {
    return (
      <BookmarksStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: "#585123"
        }, headerTitleStyle: {
          fontWeight: 'bold'
        }, headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}> 
        <BookmarksStack.Screen name = "Homemarks" component = {BookmarksScreen} options = {{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size = {25} backgroundColor = "#585123"
            onPress = {() => {navigation.openDrawer()}}>
              
            </Icon.Button>
          )
        }}
        />
      </BookmarksStack.Navigator>  
    )
  }