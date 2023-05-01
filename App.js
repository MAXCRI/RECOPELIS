import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Modal from './src/components/modal'

export default function App() {

  const [texItem, setTexItem] = useState("")
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeText = (text) => {
    setTexItem(text)
  }
  
  const addItem = () => {
    setList(prevState => [...prevState,{name:texItem,id:Math.random().toString(),},
    ]);
    setTexItem("")
  };

  const onHandleModal = item => {
    setItemSelected(item);
    setModalVisible(!modalVisible);
  }

  const onHandleDelete = item => {
    console.log("delete item",item)
    setList(prevState => prevState.filter(element => element.name !== item.name));
    setModalVisible(!modalVisible);
  };


  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <Text>{item.name}</Text>
      <Button title="X"
      onPress={()=> onHandleModal(item)}/>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>Recomendaciones Series Peliculas</Text>
        <View style={styles.addItemContainer}>
        <TextInput placeholder='Serie/Peli' style={styles.input} onChangeText={onHandleChangeText}value={texItem}/>
        <Button onPress={addItem} title='Recomendacion'/>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
        data={list}
        renderItem={renderItem}
        KeyExtractor={item => item.id}/>
        </View>
      
      <Modal  isVisible={modalVisible} 
              actionDeleteItem={() => onHandleDelete(itemSelected)} 
              itemSelected={itemSelected}/>
    </View>
    
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#CBC5D6"
    
  },
  inputContainer:{
      height:200,
      paddingHorizontal:40,
      paddingTop:50,
  },

  titleContainer:{
    marginBottom:30,
    fontSize:25,
    textAlign:'center',
    color:"#3B3840",
    fontWeight:"800",
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
