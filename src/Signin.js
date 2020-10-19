import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
 
export default class Signin extends Component {
 
    
    
  render() {
        return(
            <View style={styles.container}>
                 <Icons style={styles.personicon }name="arrow-back" size={20} color='lime'/>
                 <Text style={styles.Newuser}>New User?</Text>



                <TextInput style={styles.inputBox}
            
                onChangeText={(name) => this.setState({name})}
                underlineColorAndroid = "#ffffff"
                placeholder="Full Name" 
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                
                />

<TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})} 
                underlineColorAndroid = "#ffffff"
                placeholder="Email Address"
              
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                />






<TextInput style={styles.inputBox}
                onChangeText={(phone) => this.setState({phone})} 
                underlineColorAndroid = "#ffffff"
                
                placeholder="Phone Number"
                
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                />
                
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                
                underlineColorAndroid = '#01fff0'
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
        
      height:'100%',
      width:'100%',
      backgroundColor:'black',
      textAlign: 'center',
     

    },
    inputBox: {
        width: 350,
        backgroundColor: '#000', 
        paddingVertical:15,
        paddingHorizontal:15,
        fontSize: 16,
        color: '#fff',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button: {
        width:'90%',
        left:15,
        backgroundColor: 'green',
        borderRadius: 5,
        marginVertical: 15,
        paddingVertical: 12,
        padding:100,
     

    },
  
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    Newuser: {
        fontSize: 24,
        marginTop:-35,
        marginLeft:18,
        fontWeight: '500',
        color: '#ffffff',
        paddingVertical:10,
        paddingHorizontal:35
        
    },
    personicon:{
        
        marginTop:35,
        marginLeft:15,
        marginBottom:6
 
        
    }
  
}
);