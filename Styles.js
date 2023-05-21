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

      // Estilos para el TabNavigation
      tabBar: {
        backgroundColor:colorPalet.Fondo,
        paddingTop: 15,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        height: 85,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      },
});

export default styles