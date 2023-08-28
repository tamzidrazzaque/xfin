import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import MainStack from './routes/mainStack';
import Choose from './screens/Choose';
import Finder from './screens/Finder';
import Explorer from './screens/Explorer'
import LoginScreen from "react-native-login-screen";
import choose from './screens/Choose';


const Stack = createNativeStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function MainStack() {
    return(
        <NavigationContainer>
    
        <Stack.Navigator initialRouteName='Choose'>
          <Stack.Screen name = "Choose" component = {Choose} options = {{headerShown: false}}/>
          <Stack.Screen name = "Finder" component={Finder} 
                options = {{cardStyleInterpolator: forFade}}
  
  />
          <Stack.Screen name = "Explorer" component={Explorer}/>
        </Stack.Navigator>
      
      </NavigationContainer>
    )

}