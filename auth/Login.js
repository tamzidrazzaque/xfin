import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Icon from 'react-native-vector-icons/AntDesign';
import {auth} from '../firebase_config'

//should we have linear gradient button?
//should we make login and register into formik?
 
export class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const {email, password, name} = this.state;
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {console.log(result)})
        .catch((error) => {console.log(error)})
    }
    render() {

        return (

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                >
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon
                            name='leftcircle'
                            size = {35}
                            style = {{marginBottom: 20}}
                            />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Email'
                            onChangeText={(email) => this.setState({email  })}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                        /> 

                        <TouchableOpacity onPress={() => this.onSignUp()}>
                            <Text style={styles.buttons}>Login</Text>
                        </TouchableOpacity>
            
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    )
  }
}
const styles = StyleSheet.create({
    backButton: {
        flex: .1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttons: {
        borderWidth: 5,
        padding: 20,
        borderColor: 'black',
        marginTop: 50,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    textInput: {
        borderWidth: 5,
        padding: 10,
        borderColor: 'black',
        marginTop: 10,
        justifyContent: 'center',        
    },

   
});

export default Login