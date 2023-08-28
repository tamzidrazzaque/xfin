import { StatusBar } from 'expo-status-bar';
import { SafeAreaViewComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ref, getMetadata } from "firebase/storage";
import { storage } from '../firebase_config'
import { SafeAreaView } from 'react-navigation';
import {auth, dataBase} from '../firebase_config';
import tw from "tailwind-rn";


export default function Explorer({route}) {
    console.log(auth.currentUser);
    
    // const {id} = route.params;
    //this is the tests below trying to implement the CSV
    // const locationCSV = ref(storage, 'Locations _ XFin.csv');

    // return(
    //     getMetadata(locationCSV)
    //         .then((metadata) => {
    //       // Metadata now contains the metadata for 'images/forest.jpg'
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // )

    return(
        
        <SafeAreaView>
            {/* Header */}
                <View>
                    <TouchableOpacity>
                        {/* <Image style = {tw("h-10 w-10 rounded-full")} source={{  }}/> */}
                        
                    </TouchableOpacity>

                </View>
            {/* Header end */}
            <Text>Explorer</Text><StatusBar style="auto" />
        </SafeAreaView>
    )
}