import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
 
export default class Login extends Component {
 
    
    
  render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email Address" 
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                />
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                />
 
 <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>New User?</Text>
        </TouchableOpacity>
        
            </View>
            
            );
        
    }
    
}

 
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#000', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 350,
        backgroundColor: '#000', 
    
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
        marginVertical: 10
    },
    button: {
        width: 320,
        backgroundColor: '#008000',
        borderRadius: 5,
        marginVertical: 15,
        paddingVertical: 12
    },
    button1: {
        width: 320,
        backgroundColor: '#2F4F4F',
        borderRadius: 4,
        marginVertical: 15,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
   
    buttonText1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFF00',
        textAlign: 'center'
    }
}
);