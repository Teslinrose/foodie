import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
 
export default class Forgot extends Component {
 
    
    
  render() {
        return(
            <View style={styles.container}>
                 <Icons style={styles.icon }name="arrow-back" size={20} color='lime'/>
                 <Text style={styles.Forgot}>Forgot Password?</Text>



                <TextInput style={styles.inputBox}
            
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid = "#ffffff"
                placeholder="Enter your email address" 
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                
                />
                 <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
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
        backgroundColor: 'lime',
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
    Forgot: {
        fontSize: 24,
        marginTop:-35,
        marginLeft:18,
        fontWeight: '500',
        color: '#ffffff',
        paddingVertical:10,
        paddingHorizontal:35
        
    },
    icon:{
        
        marginTop:35,
        marginLeft:15,
        marginBottom:6
 
        
    }
  
}
);