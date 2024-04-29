import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import products from '../data/products'
import { useDispatch, useSelector } from 'react-redux'
import { productsSlice } from '../../store/productsSlice'

const ProductsScreen = ({navigation}) => {
  
   const products = useSelector(state => state.products.products)
   const dispatch = useDispatch()
  //  useState(()=> {
      
  //    console.log("data==> ",products);
  //  },[])

  return (
    <FlatList
    data={products}
    renderItem={({item}) => (
     <View style={styles.ItemContainer}>
      <Pressable onPress={() =>  {

       navigation.navigate('ProductsDetailsScreen') 
       dispatch(productsSlice.actions.selectedProducts(item.id))
      }
        }>
         <Image  source={{uri : item.image}}  style={styles.image} />
      </Pressable>
    
    </View>
    )}
    numColumns={2}
    />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({

    image:{
        width:'100%',
        aspectRatio:1
      },
    
      ItemContainer:{
    
         width:'50%',
         padding:1
      }

})