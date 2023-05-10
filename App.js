
import {Text, View } from 'react-native';
import styles from './Styles';
import { useFonts } from 'expo-font';
import Login from './src/components/Login/login';


export default function App() {

 const [loaded]= useFonts({
    "Ubuntu-Regular":require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold":require("./assets/fonts/Ubuntu-Bold.ttf"),
  });

  let content = <Login/>
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>RECOPELIS</Text>
        {content}
      </View>
    </View>
    
  )
};

