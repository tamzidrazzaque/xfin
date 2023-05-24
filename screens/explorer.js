import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function explorer({route}) {
    const {id} = route.params;
    return(
        <Text>Welcome to the explorer page {id.name}</Text>
  
    );
}