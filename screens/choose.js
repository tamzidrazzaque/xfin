import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemeProvider } from "react-native-rapi-ui";
import React, {useState} from 'react';


export default function choose({navigation}) {
    const [name, setName] = useState('NoName');
    return (
    
        <View style={styles.container}>
          <Text style={styles.title}>XFin</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Explorer", {id: {name}})}>
            <Text style={styles.buttons}>eXplorer</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Finder", {id: {name}})}>
            <Text style={styles.buttons}>FINder</Text>
          </TouchableOpacity>
        
          <Text>Type name below: </Text>
          
          <TextInput onChangeText={(val) => setName(val)}></TextInput>
          
          <Text>Your name is {name}</Text>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 19,
      }, 
      buttons: {
        borderWidth: 5,
        padding: 10,
        borderColor: 'black',
        marginTop: 10,
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 100,
    
      },
    });
    