import {Button,FlatList,Text,TextInput,View,} from "react-native";
import { useState } from "react";
import Modal from "../../components/DeleteItemList/Modal";
import React from "react";

import styles from './Styles';

  
  function Recomendar() {
    const [textItem, setTextItem] = useState("");
    const [list, setList] = useState([]);
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
  
    const onHandleChangeText = text => {
      setTextItem(text);
      console.log(text);
    };
  
    const addItem = () => {
      console.log("aqui agregamos el item", textItem);
      setList(prevState => [
        ...prevState,
        { name: textItem, id: Math.random().toString() },
      ]);
      setTextItem("");
    };
  
    const onHandleModal = item => {
      setItemSelected(item);
      setModalVisible(true);
    };
  
    const onHandleDelete = item => {
      console.log("eliminar este item", item);
      setList(prevState =>
        prevState.filter(element => element.name !== item.name)
      );
      setModalVisible(false);
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.renderItemStyle}>
        <Text>{item.name}</Text>
        <Button title="X" onPress={() => onHandleModal(item)} color={"red"} />
      </View>
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          
          <Text style={styles.subtituleContainer}>Recomendame una serie o pelicula !!</Text>
          <View style={styles.addItemContainer}>
            <TextInput
              placeholder="TITULO PELICULA O SERIE"
              style={styles.input}
              onChangeText={onHandleChangeText}
              value={textItem}
            />
            <Button title="RECOMENDAR" color="red"onPress={addItem} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <Modal
          isVisible={modalVisible}
          actionDeleteItem={() => onHandleDelete(itemSelected)}
          itemSelected={itemSelected}
        />
      </View>
    );
  }
  
  export default Recomendar;

