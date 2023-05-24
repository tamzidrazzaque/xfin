import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import MainStack from './routes/mainStack';
import chooseScreen from './screens/choose';
import finderScreen from './screens/finder';
import explorerScreen from './screens/explorer'
import LoginScreen from "react-native-login-screen";
import choose from './screens/choose';
import mainStack from './mainStack';


const Stack = createNativeStackNavigator();

export default function App() {
  console.log('lol')
  return (
    mainStack()
    // <LoginScreen
    //   onLoginPress={() => {console.log('pressed')}}
    //   />
      //{
      //   <NavigationContainer>
    
      //   <Stack.Navigator initialRouteName='Choose'>
      //     <Stack.Screen name = "Choose" component = {chooseScreen} options = {{title: 'tester chooser'}}/>
      //     <Stack.Screen name = "Finder" component={finderScreen}/>
      //     <Stack.Screen name = "Explorer" component={explorerScreen}/>
      //   </Stack.Navigator>
      
      // </NavigationContainer>
      
  );
}

