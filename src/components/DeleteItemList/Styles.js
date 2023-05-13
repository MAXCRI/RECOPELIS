import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalStyle: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 40,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTextStyle: {
      fontSize: 30,
    },
    subtituleContainer:{
      fontFamily:"UbuntuRegular",
      marginBottom:30,
      fontSize:18,
      textAlign:'center',
      color:"#3B3840",
      
    },
  });
  export default styles  