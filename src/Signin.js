import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
 
export default class Signin extends Component {
 
    
    
  render() {
        return(
            <View style={styles.container}>
                 <Text style={styles.Newuser}>New User?</Text>
                <TextInput style={styles.inputBox}
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Full Name" 
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                />

<TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email Address"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                />

<TextInput style={styles.inputBox}
                onChangeText={(phone) => this.setState({phone})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Phone Number"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
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
          <Text style={styles.buttonText}>Register Now</Text>
        </TouchableOpacity>
        
        
            </View>
            
            );
        
    }
    
}

 
const styles = StyleSheet.create({
    container: {
        
        height:620,
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
        paddingVertical: 12,
        padding:100

    },
  
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    Newuser: {
        fontSize: 28,
        fontWeight: '500',
        color: '#ffffff',
        
    }
  
}
);