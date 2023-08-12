import React from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {auth} from 'firebase/auth'


export default function Landing({navigation}) {
  
  return (
    

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, paddingBottom: 30}}>
          XFin
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
            <Text style={styles.regButt}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.logButt}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  regButt: {
    borderWidth: 5,
    padding: 20,
    borderColor: 'black',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  logButt: {
    borderWidth: 5,
    padding: 20,
    borderRightWidth: 15,
    borderLeftWidth: 15,
    borderColor: 'black',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',  
  }
});

