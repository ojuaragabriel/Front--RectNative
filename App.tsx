import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';

import Routes from './src/routes/index.routes';
import {NavigationContainer} from '@react-navigatin/native';

export default function App() {
  return (
    <Login/>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Routes></Routes>
//     </NavigationContainer>
//   );
// }


const styles = StyleSheet.create({
    container:{
      flex:1
    },
  
});
