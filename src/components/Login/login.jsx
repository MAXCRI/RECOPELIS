
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import styles from './Styles';
import { useFonts } from 'expo-font';
import ListContainer from './src/components/ListContainer/listContainer'

export default function login() {

 const [loaded]= useFonts({
    "Ubuntu-Regular":require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold":require("./assets/fonts/Ubuntu-Bold.ttf"),
  });

 
  const onHandleChangescreen = () => {
    setTexItem()
  }
  
  let content = <ListContainer />
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>RECOPELIS</Text>
        <Text style={styles.subtituleContainer}>ingresa tu usuario y contraseñá!!</Text>
        <View style={styles.addItemContainer}>
        <TextInput placeholder='CORREO O USUARIO' style={styles.input} onChangeText={onHandleChangeText}value={texItem}/>
        <View>
        
        </View>
       
        </View>
      </View>
      <Button title='INGRESAR  '/>
      <Button title='Olvide Mi contraseña'/>
    </View>
    
  )
};

