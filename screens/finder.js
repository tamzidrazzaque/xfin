import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react';

export default function finder({route}) {
    const {id} = route.params;
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to finder page {id.name}. Here you can log a new location you found.</Text>
            <View>
                <Text>Give a title for your location</Text>
                <Text>Upload up to five photos</Text>
                <Text>Write a description</Text>
                    <View>
                        <TextInput/>
                    </View>
                <Text></Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
    }
});