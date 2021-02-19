import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import ProfileStackScreen from './../Stacks/ProfileStackScreen'
import ExploreStackScreen from './../Stacks/ExploreStackScreen'
import HomeStackScreen from './../Stacks/HomeStackScreen'
import DetailsStackScreen from './../Stacks/DetailsStackScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function MainTabsScreen () {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor = "#fff"
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#480ca8',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Details',
            tabBarColor: '#9e0059',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component = {ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#386641',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreStackScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#048ba8',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="archive" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
          
    )
  }