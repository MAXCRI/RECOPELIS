import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListContainer from '../components/ListContainer/ListContainer'
import Login from '../components/Login/Login'

const  ScreenNavigator = ()=> {

    const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false,}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Recomendaciones' component={ListContainer}/>
        </Stack.Navigator>
    
    </NavigationContainer>
  )
}

export default ScreenNavigator

const styles = StyleSheet.create({})