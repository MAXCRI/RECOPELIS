import { StyleSheet,Text, View, Modal as NewModal, Pressable} from 'react-native'
import React from 'react'
import styles from "./styles"
const modal = ({isVisible, actionDeleteItem, itemSelected}) => {
  return (
    
    <NewModal
    visible={isVisible} animationType='fade'>
      <View style={styles.modalContainer} >
        <View>
        <Text style={styles.tituloModal}>Estas Seguro que deseas eliminar la Recomendacion ?</Text>
        <Text style={styles.modalTextStyle}>{itemSelected.name} </Text>
        <Pressable style={styles.ButtonDelete}  onPress={()=> actionDeleteItem()}>
        <Text style={styles.textDelete}>Eliminar</Text>
        </Pressable>
        </View>
      </View>
      </NewModal>
  )
}

export default modal

