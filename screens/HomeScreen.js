import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons'

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text style = {styles.titleText}> 
          Home Screen 
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
  
  