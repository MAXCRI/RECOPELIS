import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#CBC5D6",
    },
  
    tituloModal:{
      fontSize:25,
      padding:25,
      alignItems:"center",
      justifyContent:'space-between'
    },
    ButtonDelete: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
      elevation: 3,
      backgroundColor: '#D52A48',
    },
    textDelete:{
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    modalTextStyle: {
      fontSize: 30,
      justifyContent: "center",
      alignItems: "center",
    },
  
  });

  export default styles;