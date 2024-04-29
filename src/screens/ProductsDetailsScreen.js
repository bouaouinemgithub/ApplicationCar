import {ScrollView, FlatList,Dimensions, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'
import ButtonClick from '../components/ButtonClick'
import { useDispatch, useSelector } from 'react-redux'
import {addCartItem} from '../../store/cartSlice'
import { showSuccess } from '../../utils/toasts'

const ProductsDetailsScreen = () => {

    const product = useSelector(state => state.products.selectedProducts)
    const dispatch = useDispatch()
    const {width,height} =Dimensions.get('window')
  
    const addTocart = () => {
      showSuccess("save choice");
         dispatch(addCartItem({product }))
         
        //  console.log("passe2",showSuccess);
    }

  return (
    <View>
        <ScrollView>
         <FlatList  data={product.images}
        renderItem={({item}) => (
       <Image  source={{ uri : item}}
        style={{width:width,aspectRatio:1  }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
        />
    
    <View style={styles.itemsContainer}>
     <Text style={styles.title}>{product.name}</Text>
     <Text style={styles.price}>${product.price}</Text>
     <Text style={styles.description}>{product.description}</Text>
    </View>
     </ScrollView>

     
     <ButtonClick 
     function={addTocart} 
     title='Add to  cart'
    />
     
     
     
      
    </View>
  )
}

export default ProductsDetailsScreen

const styles = StyleSheet.create({

    itemsContainer:{
         padding :20,
    },
    title:{
     fontSize:34,
     fontWeight:'500',
     marginVertical:10
   },
   price :{
    fontWeight:'500',
    fontSize:16
   },
   description :{
     marginVertical:10,
     fontSize:18,
     lineHeight:30,
     fontWeight:'300'
   },

   button:{
      position:'absolute',
      width:'80%',
      backgroundColor:'black',
      bottom:30,
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