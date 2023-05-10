import { StyleSheet } from "react-native";
import colorPalet from './src/components/constants/colorPalet';

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:colorPalet.Fondo,
      fontFamily:"Ubuntu-Bold",
    },
    inputContainer:{
        height:200,
        paddingHorizontal:40,
        paddingTop:50,
    },
  
    titleContainer:{
      marginBottom:30,
      fontSize:30,
      textAlign:'center',
      color:"#3B3840",
      fontWeight:"800",
      textShadowColor:"black",
    textShadowOffset:{width:1, height:3,},      
    textShadowRadius:5,
    },
    subtituleContainer:{
        fontFamily:"Ubuntu-Regular",
        marginBottom:30,
        fontSize:18,
        textAlign:'center',
        color:"#3B3840",
        
      },
  
    addItemContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      
    },
    input:{
      borderBottomColor:"black",
      borderBottomWidth:2,
      width:200,
    },
    listContainer:{
      flex:2,
      marginHorizontal:30,
      marginTop:20,
      padding:3,
    },
    renderItemStyle:{
      height:60,
      flexDirection:"row",
      marginBottom:25,
      backgroundColor:"white",
      borderRadius:10,
      padding:10,
      justifyContent:"space-around",
      alignItems:"center",
      shadowColor:"black",
      shadowOpacity:0.3,
      shadowOffset:{width:0, height:1},
      shadowRadius:2,
      elevation:3,
    },
  });
  




export default styles