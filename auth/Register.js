import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/AntDesign';
import { auth } from '../firebase_config';
import { dataBase } from '../firebase_config';
import { addDoc, collection } from 'firebase/firestore';

//dont forget to add email already exists

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        addDoc(collection(dataBase, "users"), {
            name,
            email
        });
        // firebase.firestore().collection("users")
        //     .doc(auth.currentUser.uid)
        //     .set({
        //         name,
        //         email 
        //     })
        console.log(result);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="leftcircle" size={35} style={{ marginBottom: 20 }} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={setName}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={onSignUp}>
            <Text style={styles.buttons}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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

export default Register;



// import React, { Component } from 'react'
// import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import Icon from 'react-native-vector-icons/AntDesign';
// import {auth} from '../firebase_config'

// //should we have linear gradient button?
 
// export class Register extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             name: '', 
//         }
//         this.onSignUp = this.onSignUp.bind(this)
//     }

//     onSignUp(){
//         const {email, password, name} = this.state;
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((result) => {console.log(result)})
//         .catch((error) => {console.log(error)})
//     }
//     render() {

//         return (

//             <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

//                 <KeyboardAvoidingView
//                     style={styles.container}
//                     behavior="padding"
//                 >
//                     <View>
                       
//                         <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
//                             <Icon
//                                 name='leftcircle'
//                                 size = {35}
//                                 style = {{marginBottom: 20}}
//                                 />
                        
//                         </TouchableOpacity>
//                         <TextInput
//                             style={styles.textInput}
//                             placeholder='Name'
//                             onChangeText={(name) => this.setState({name})}
//                         />
//                         <TextInput
//                             style={styles.textInput}
//                             placeholder='Email'
//                             onChangeText={(email) => this.setState({email  })}
//                         />
//                         <TextInput
//                             style={styles.textInput}
//                             placeholder='Password'
//                             secureTextEntry={true}
//                             onChangeText={(password) => this.setState({password})}
//                         /> 

//                         <TouchableOpacity onPress={() => this.onSignUp()}>
//                             <Text style={styles.buttons}>Register</Text>
//                         </TouchableOpacity>
            
//                     </View>
//                 </KeyboardAvoidingView>
//             </TouchableWithoutFeedback>
//     )
//   }
// }
// const styles = StyleSheet.create({


//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },

//     buttons: {
//         borderWidth: 5,
//         padding: 20,
//         borderColor: 'black',
//         marginTop: 50,
//         marginHorizontal: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },

//     textInput: {
//         borderWidth: 5,
//         padding: 10,
//         borderColor: 'black',
//         marginTop: 10,
//         justifyContent: 'center',        
//     },

   
// });

// export default Register