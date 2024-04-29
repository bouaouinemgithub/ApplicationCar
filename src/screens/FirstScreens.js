import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
const MonImage = require('../../assets/background.png');
const FirstImage = { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike4.png' };

const FirstScreens = ({navigation}) => {

     useState(()=>{

        setTimeout(() =>  navigation.navigate('ProductsScreen')  , 2000);
     },[])

  return (
    <View style={styles.container}>
        {/* <Image style={{height:'100%',width:'100%'}} source={MonImage} /> */}

         <Image style={{top:120,borderColor:'black',borderWidth:2,padding:10,height:250,width:250,position:'absolute',borderRadius:250}} source={FirstImage} />
          <Text  style={{position:'absolute',top:400,fontSize:25,fontWeight:'bold',color:'white'}}>Shoping</Text>
    </View>
  )
}

export default FirstScreens

const styles = StyleSheet.create({

    container:{
         flex:1,
         backgroundColor:'#159BB9',
         alignItems:'center'
    }

})