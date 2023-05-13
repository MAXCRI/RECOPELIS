import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ListContainer from './src/components/ListContainer/ListContainer';
import Login from './src/components/Login/Login';
import { useFonts } from 'expo-font';
import styles from './Styles';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loaded]= useFonts({
    UbuntuRegular:require("./src/assets/fonts/Ubuntu-Regular.ttf"),
    UbuntuBold:require("./src/assets/fonts/Ubuntu-Bold.ttf"),

  });

  if (!loaded) return null

  function renderScreen() {
    if (isLoggedIn) {
      return <ListContainer />;
    } else {
      return <Login setIsLoggedIn={setIsLoggedIn} />;
    }
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.titleContainer}>RECOPELIS </Text>
      {renderScreen()}
    </View>
  );
}

export default App
