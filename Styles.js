import { StyleSheet } from "react-native";
import colorPalet from './src/constants/ColorPalet';

const styles = StyleSheet.create({
    titleContainer:{
        marginBottom:40,
        fontSize:30,
        textAlign:'center',
        color:"#3B3840",
        fontWeight:"800",
        textShadowColor:"black",
      textShadowOffset:{width:1, height:3,},      
      textShadowRadius:5,
      },

      container: {
        flex:1,
        backgroundColor:colorPalet.Fondo,
        fontFamily:"UbuntuRegular",
        paddingTop:60,
      },
});

export default styles