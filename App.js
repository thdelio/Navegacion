import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainTabsScreen from './screens/MainTabsScreen'
import {DrawerContent} from './screens/DrawerContent'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component = {MainTabsScreen}/>
        {/* <Drawer.Screen name="Details" component = {DetailsStackScreen}/> */}
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
