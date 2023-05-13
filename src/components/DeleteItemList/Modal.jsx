import {Text,View,Modal as NewModal,Button,} from "react-native";
import React from "react";
import styles from './Styles';

const Modal = ({ isVisible, actionDeleteItem, itemSelected }) => {
  return (
    <NewModal visible={isVisible} animationType="fade" >
      <View style={styles.modalContainer}>
        <View>
          <Text style={styles.subtituleContainer}>Estas seguro que desas borrar la Recomendacion?</Text>
          <Text style={styles.modalTextStyle}>{itemSelected.name}</Text>
          <Button
            title="Eliminar"
            color={"red"}
            onPress={() => actionDeleteItem()}
          />
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

