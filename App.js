import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootApp from './RootApp';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './store';



export default function App() {

  return (
        <Provider store={store}>  
       
        <RootApp />
        <Toast/>
         
        </Provider>
       
       
      
  );
}

const styles = StyleSheet.create({

  container:{

     alignContent:'center',
     flex:1
  }

})


