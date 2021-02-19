import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import DetailsStackScreen from './Stacks/DetailsStackScreen'
import HomeStackScreen from './Stacks/HomeStackScreen'

const Drawer = createDrawerNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Home">
        <Drawer.Screen name="Home" component = {HomeStackScreen}/>
        <Drawer.Screen name="Details" component = {DetailsStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },

  button: {
    marginBottom: 20,
    padding: 30
}
});
