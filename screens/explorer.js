import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ref, getMetadata } from "firebase/storage";
import { storage } from '../firebase_config'

export default function Explorer({route}) {
    // const {id} = route.params;
    const locationCSV = ref(storage, 'Locations _ XFin.csv');

    return(
        getMetadata(locationCSV)
            .then((metadata) => {
          // Metadata now contains the metadata for 'images/forest.jpg'
            })
            .catch((error) => {
                console.log(error)
            })
    )
}