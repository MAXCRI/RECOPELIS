import { Text, View, Modal as NewModal, Pressable} from 'react-native'
import React from 'react'
import styles from "./styles.js"

const modal = ({isVisible, actionDeleteItem, itemSelected}) => {
  return (
    
    <NewModal style={styles.fonfoContainer}
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

