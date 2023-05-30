import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './Styles';
import ScreenNavigator from './src/navigation/ScreenNavigator';
import { Provider } from 'react-redux';
import store from './src/store';



function App() {

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loaded]= useFonts({
    UbuntuRegular:require("./src/assets/fonts/Ubuntu-Regular.ttf"),
    UbuntuBold:require("./src/assets/fonts/Ubuntu-Bold.ttf"),

  });

  if (!loaded) return null

// Dejo el renderizado condicional para futuro agregar un login que funcione realmente
/*
  function renderScreen() {
    if (isLoggedIn) {
      return <ListContainer />;
    } else {
      return <Login setIsLoggedIn={setIsLoggedIn} />;
    }
  }
  {renderScreen()} 
*/
 
/* 
    <SafeAreaView style={{flex:1,}}>
    <ScreenNavigator/>
    </SafeAreaView>
    */
    return (
    <Provider store={store}>
    <View style={styles.container}>
      <Text style={styles.titleContainer}>RECOPELIS </Text>
      <ScreenNavigator/>
    </View>
    </Provider>
  );
}

export default App
