import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
import { ThemeProvider } from "react-native-rapi-ui";
import React, {useState} from 'react';
import {auth, dataBase} from '../firebase_config'
import { getDoc } from 'firebase/firestore';


export default function Choose({navigation}) {
    const username = auth.currentUser.name;
    return (
    
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to XFin</Text>
          <Text style={styles.header}>{auth.currentUser?.email}</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Explorer", {id: {username}})}>
            <Text style={styles.buttons}>eXplorer</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Finder", {id: {username}})}>
            <Text style={styles.buttons}> FINder </Text>
          </TouchableOpacity>
        
          
                    <TouchableOpacity onPress={() => auth.signOut().then(() => console.log('User signed out!'))}>
            <Text style={styles.buttons}>Log out</Text>
          </TouchableOpacity>
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
        fontSize: 40,
        marginBottom: 0,
      }, 
      header:{
        fontWeight:'bold',
        fontSize: 25,
        marginBottom: 10,

      },
      buttons: {
        borderWidth: 5,
        fontSize:20,
        padding: 10,
        borderColor: 'black',
        marginTop: 10,
        justifyContent: 'center',
      },
    });
    