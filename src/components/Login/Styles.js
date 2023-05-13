
import { StyleSheet } from "react-native";
import colorPalet from "../../constants/ColorPalet";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colorPalet.Fondo,
        
        alignItems:"center",
      },
      inputUser:{
        height:40,
        width:200,
        margin:12,
        borderWidth:1,
        padding:10,
      },
      inputContra:{
        height:40,
        width:200,
        margin:12,
        borderWidth:1,
        padding:10,
      },

      button:{
        paddingTop:150,
        
      },
});

export  default styles;