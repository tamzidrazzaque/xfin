import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
//with new changes rohil DELETE

//For this screen maybe have a modal form. So a plus sign at the top of the screen then "your existing submissions"
//below that. Use matrial icons for the plus button and learn animation styles for that

export default function Finder({route}) {
    // const {id} = route.params;
    const [modalOpen, setmodalOpen] = useState(false)
    return (
        <View style={styles.titleContainer}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.container}>
                    <View style={styles.topline}>
                    </View>
                    <TouchableOpacity onPress={() => setmodalOpen(false)}>
                        <Entypo
                            name='circle-with-cross'
                            size = {50}
                            style = {styles.modal}
                            />
                    </TouchableOpacity>


                </View>

            </Modal>

            <Text style={styles.title}>Welcome to finder page. Here you can log a new location you found.</Text>
            <TouchableOpacity onPress = {() => setmodalOpen(true)}>
                <AntDesign
                    name='pluscircle'
                    size = {50}
                    style = {styles.addButton}
                    />
            </TouchableOpacity>

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
    container: {
        flex: 1,
    },
    titleContainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        padding: 30
    },
    addButton: {
        alignItems: 'center'
    },
    modal: {
        position: 'absolute',
        left: 20,
        top: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topline: {
        marginTop: 0,
        height: 50,
        backgroundColor: 'black',
    }
});