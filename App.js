import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainTabsScreen from './screens/MainTabsScreen'
import {DrawerContent} from './screens/DrawerContent'
import SupportStackScreen from './Stacks/SupportStackScreen'
import SettingsStackScreen from './Stacks/SettingsStackScreen'
import BookmarksStackScreen from './Stacks/BookmarksStackScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component = {MainTabsScreen}/>
        <Drawer.Screen name="Support" component = {SupportStackScreen}/> 
        <Drawer.Screen name="Settings" component = {SettingsStackScreen}/> 
        <Drawer.Screen name="Bookmarks" component = {BookmarksStackScreen}/> 
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
