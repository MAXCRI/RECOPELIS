
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Modal from './src/components/deleteItemsList';
import styles from './styles';

export default function listContainer() {

  
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
        <Text style={styles.titleContainer}>RECOPELIS</Text>
        <Text style={styles.subtituleContainer}>Recomendame una serie o pelicula !!</Text>
        <View style={styles.addItemContainer}>
        <TextInput placeholder='TITULO SERIE / PELICULA' style={styles.input} onChangeText={onHandleChangeText}value={texItem}/>
        <Button onPress={addItem} title='Recomendar'/>
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

