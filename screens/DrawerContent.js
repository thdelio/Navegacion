import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileStackScreen from '../Stacks/ProfileStackScreen'

export function DrawerContent(props) {

    const [isDarkTheme, setisDarkTheme] = React.useState(false)

    const toggleTheme = () => {
        setisDarkTheme(!isDarkTheme)
    }

    return(
        <View style = {{flex: 1}}>
            <DrawerContentScrollView>
                <View style = {styles.drawerSection}>
                    <View style = {styles.userInfoSection}>
                        <View style = {{flexDirection: 'row', marginTop: 10}}>
                            <Avatar.Image source = {
                                require ('./../assets/batman.png')
                            } size= {80}/>
                            <View style = {{marginLeft: 15}}>
                                <Title style = {styles.title}>Batman</Title>
                                <Caption style = {styles.Caption}>@Batman</Caption>
                            </View>
                        </View>
                        <View style = {styles.row}>
                            <View style = {styles.section}>
                                <Paragraph style = {styles.Paragraph}> 3 </Paragraph>
                                <Caption style = {styles.Caption}> Following </Caption>
                            </View>
                            <View style = {styles.section}>
                                <Paragraph style = {styles.Paragraph}> 150 M </Paragraph>
                                <Caption style = {styles.Caption}> Followers </Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style = {styles.drawerSection}>
                        <DrawerItem icon = {({
                            color, size}) => (
                                <Icon name = "home-outline" color = {color} size = {size}/>
                            )} 
                            label = "Home" onPress = {() => {props.navigation.navigate('Home')}} />
                        <DrawerItem icon = {({
                            color, size}) => (
                                <Icon name = "account-outline" color = {color} size = {size}/>
                            )} 
                            label = "Profile" onPress = {() => {props.navigation.navigate('Profile')}} />
                        <DrawerItem icon = {({
                            color, size}) => (
                                <Icon name = "bookmark-outline" color = {color} size = {size}/>
                            )} 
                            label = "Bookmark" onPress = {() => {props.navigation.navigate('Bookmarks')}} />     
                        <DrawerItem icon = {({
                            color, size}) => (
                                <Icon name = "wrench-outline" color = {color} size = {size}/>
                            )} 
                            label = "Settings" onPress = {() => {props.navigation.navigate('Settings')}} />   
                        <DrawerItem icon = {({
                            color, size}) => (
                                <Icon name = "account-check-outline" color = {color} size = {size}/>
                            )} 
                            label = "Support" onPress = {() => {props.navigation.navigate('Support')}} />
                    </Drawer.Section>
                    <Drawer.Section title = "Preferences">
                        <TouchableRipple onPress ={() => {toggleTheme()}}>
                            <View style = {styles.preference}>
                                <Text> Dark Theme</Text>
                                <View pointerEvents = "None">
                                    <Switch value = {isDarkTheme}/>
                                </View>    
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView> 
            <Drawer.Section style = {styles.bottonDrawerSection}>
                <Drawer.Item icon ={({color, size}) => (
                    <Icon name = "exit-to-app" color = {color} size = {size}/>
                )} label = "Sign Out" onPress = {() => {}}/>
            </Drawer.Section>  
        </View>
    )
}

const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    Caption: {
        fontSize: 14, 
        lineHeight: 14
    }, 
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    Paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottonDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
})