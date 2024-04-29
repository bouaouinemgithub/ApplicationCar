import * as React from 'react';
import { View, Text, Pressable, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductsDetailsScreen from './src/screens/ProductsDetailsScreen';
import ShoopingCart from './src/screens/ShoopingCart';
import {FontAwesome5} from '@expo/vector-icons'
import { showSuccess } from './utils/toasts';
import FirstScreens from './src/screens/FirstScreens';


const Stack = createNativeStackNavigator();


const test = () => {
 const handelmessage = () =>{
   
       console.log("message");
       showSuccess("passe")
       
 }

  return (
    <View>
      <Text>RootApp</Text>
       <Button title='message' onPress={handelmessage}/>
    </View>
  )
}


function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="test" component={test} /> */}
      <Stack.Screen  options={{
      headerShown: false, // Activer l'affichage du header pour cet écran
    }} name="FirstScreens" component={FirstScreens} />
      
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} 
         options={({navigation}) => ({
            headerRight: () => (
                  <Pressable onPress={()=> navigation.navigate('ShoopingCart')} style={{flexDirection:'row',alignItems:'center'}}>
                     <FontAwesome5 name="shopping-cart" size={18} color="gray"/>
                     <Text style={{marginLeft:5,fontWeight:'600'}}>1</Text>
                 </Pressable>
            ),
            headerTitleAlign: 'center'
            
         })}
         />
        <Stack.Screen name="ProductsDetailsScreen" component={ProductsDetailsScreen} />
        <Stack.Screen name="ShoopingCart" component={ShoopingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootApp;