import React, {Component} from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import {Button} from 'react-native-elements'

export default function DetailsScreen({navigation}) {
    return (
      <View style={styles.container}>
          <Text style = {styles.titleText}> 
            Details Screen
          </Text>
          <Button title = "Click Here!" 
          onPress = {() => alert('Button Clicked!')}
          style = {styles.button}/>
      </View>
    )
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
  