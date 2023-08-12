import React, {component, useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './auth/Landing';  
import RegisterScreen from './auth/Register';
import LoginScreen, { Login } from './auth/Login'
import {auth} from './firebase_config'
import MainStack from './MainStack';
import { getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";
import { CardStyleInterpolators } from 'react-navigation-stack';


export default function App() {

  const Stack = createNativeStackNavigator();
  const [Loggedin, setLoggedin] = useState(false)
  const [Loaded, setLoaded] = useState(false)
  const user = auth.currentUser;
  

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user){
        setLoaded(true)
        setLoggedin(true)

      } else {
        setLoaded(true)
        setLoggedin(false)
      }
    })
    return unsubscribe
  }, [])

  if (!Loaded){
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading</Text>
      </View>
      
    );
  }
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) {
  //   // Return a loading indicator or splash screen here
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <Text>Loading...</Text>
  //     </View>,
  //     console.log("here")
  //   );
  // }

    if (Loggedin){
      return (
        // console.log(user.email),
        <MainStack/>
        
      );
  } 
  const config = {
    animation: 'vertical',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
    return (
  
      <NavigationContainer >
        <Stack.Navigator initialRouteName='LandingScreen'>
          <Stack.Screen name='LandingScreen' component={LandingScreen}  options={{headerShown: false}} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{transitionSpec: {
            open: config,
            close: config,
          },}}/>
        </Stack.Navigator>
      </NavigationContainer>
          
      );
}





// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       loaded: false,
//     }
//   }
//   componentDidMount(){

//   }

//   render() {

//     return (
//       <View>
//         <Text>App</Text>
//       </View>
//     )
//   }
// }



        {/* <NavigationContainer>
    
          <Stack.Navigator initialRouteName='Choose'>
            <Stack.Screen name = "Choose" component = {Choose} options = {{headerShown: true}}/>
            <Stack.Screen name = "Finder" component={Finder}/>
            <Stack.Screen name = "Explorer" component={Explorer}/> */}
          {/* </Stack.Navigator> */}
  
        {/* </NavigationContainer> */}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});