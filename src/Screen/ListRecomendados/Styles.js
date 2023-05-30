import { StyleSheet } from "react-native";
import colorPalet from "../../constants/ColorPalet";


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colorPalet.Fondo,
    fontFamily:"UbuntuBold",
  },
  inputContainer:{
      height:200,
      paddingHorizontal:40,
      paddingTop:50,
  },

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
  subtituleContainer:{
      fontFamily:"UbuntuRegular",
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
});


  export default styles