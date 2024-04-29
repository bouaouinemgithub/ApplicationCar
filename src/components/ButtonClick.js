import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonClick =  props => {
  return (
    <Pressable style={styles.button} onPress={props.function}>
         <Text style={styles.buttonTitile}>{props.title}</Text>
     </Pressable>
  )
}

export default ButtonClick

const styles = StyleSheet.create({

    button:{
        position:'absolute',
        width:'80%',
        backgroundColor:'black',
        bottom:20,
        alignSelf:'center',
        borderRadius:40,
        padding:14,
        alignItems:'center'
     },
     buttonTitile:{
       fontSize:16,
       color:'white',
       fontWeight:'500'
  
     },

})