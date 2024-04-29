import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem'
import cart from '../data/cart'
import ButtonClick from '../components/ButtonClick'
import { useSelector } from 'react-redux'
import { selectSelectedProducts } from '../../store/productsSlice'

const FooterListtt = () => (

  <View style={styles.SommeTotle}>
  <View style={styles.card}>
      <Text style={styles.text}>Subtotle</Text>
      <Text style={styles.text}>410.25</Text>
  </View>

  <View style={styles.card}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10.00 us$</Text>
  </View>

  <View style={styles.card}>
      <Text style={styles.textBold}>Delivery</Text>
      <Text style={styles.textBold}>10.00 us$</Text>
  </View>

  

</View>
) 

const ShoopingCart = () => {

 const cartItems = useSelector(state => state.cart.items)

  return (
     <View style={{flex:1,paddingTop:10}}>
   <FlatList 
    data={cartItems}
    renderItem={({item}) => <CartListItem cartItem={item} />}
    ListFooterComponent={FooterListtt}
    />
     <ButtonClick title='Checkoute' />
     
   </View>
  )
}

export default ShoopingCart

const styles = StyleSheet.create({

  SommeTotle:{

       padding:18,
       borderColor:'black',
       borderTopWidth:1
  },
  card:{
      flexDirection:'row',
      justifyContent:'space-between',
  },
  text:{
     fontSize:16,
     },
     textBold:{
     
    fontSize:16,
    fontWeight:'bold',
  
  },

  button:{
    position:'absolute',
    bottom:30,
    width:'80%',

    backgroundColor:'black',
   
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