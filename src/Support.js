import React,{ Component } from 'react';
import{View,TouchableOpacity ,Text,StyleSheet} from "react-native";
import { TextInput} from 'react-native';
import{ ScrollView, Button,} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Mailicons from 'react-native-vector-icons/Entypo';

export  default class Support extends Component{
    render(){
        return(
           
            <View>
                <View style={styles.header}>
                 <Icon style={styles.baricon } name='navicon' size={28} color='lime'/>
                 </View>
                 <View style ={styles.body}>
             <ScrollView style={styles.scrolldata} color='lime'>
           
                
               
                
                <Text style={styles.headertext}>We're Happy to</Text>
                <Text style={styles.headertextsub }>hear from you!!</Text>
                <Text style={styles.subtext}>Let us know your queries & feedbacks</Text>
                <View style={styles.viewdata}>
                <TouchableOpacity style={styles.button}>
                <Icons  style={styles.callicon}name="call" size={15} color='lime'/><Text style={styles.buttontext}>Call us</Text>
                </TouchableOpacity>
                </View>
                <Mailicons style={styles.mailicon} name="mail"  size={22} />
                <Text style={styles.mailtext}> Send your message</Text>
                
                <TextInput style={styles.emailinput} placeholder="Email" placeholderTextColor="#818481"></TextInput>
                <TextInput style={styles.nameinput} placeholder="Full Name" placeholderTextColor="#818481"></TextInput>
                <TextInput style={styles.subjectinput} placeholder="Subject" placeholderTextColor="#818481"></TextInput>
                <TextInput style={styles.msginput} placeholder="Your Message" placeholderTextColor="#818481"></TextInput>
                <TouchableOpacity style={styles.viewbutton}>
                <Text style={styles.sumbittext}>Submit Now</Text>
                </TouchableOpacity>
                </ScrollView>

              </View>  
            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:'#111118'
    },
    body:{
        backgroundColor:'#111118'
    },
    scrolldata:{
        height:470,
        backgroundColor:'#111118'
    },
    
    baricon:{
        marginTop:16,
        marginRight:260,
        marginLeft:10
    },
    headertext:{
        fontSize:25,
        color:'#f5fffa',
        marginTop:10,
        marginLeft:13,
        fontWeight:'300'
    },
    headertextsub:{
        fontSize:25,
        color:'#f5fffa',
        fontWeight:'300',
        marginLeft:13
    },
    subtext:{
        fontSize:16,
        color:'#606560',
        marginTop:10,
        marginBottom:20,
        marginLeft:13
    },
    viewdata:{
        flexDirection:'row'
    },
    button:{
        fontSize:15,
        backgroundColor:'#f5fffa',
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:20,
        paddingRight:85,
        paddingBottom:10,
        paddingTop:10,
        marginBottom:10,
        borderRadius:10
        
        
    },
    buttontext:{
        color:'#3dff00',
        flexDirection:'row',
        marginLeft:10,
        fontSize:18,
        

    },
    callicon:{
        color:'#3dff00',
        flexDirection:'row',
        marginLeft:80
         },
    mailicon:{
        color:'#3dff00',
        marginLeft:20,
        marginTop:30,
        marginRight:270
    },
    mailtext:{
        color:'#f5fffa',
        marginLeft:50,
        marginBottom:10,
        marginTop:-25,
        fontSize:18,
    },
    emailinput:{
        paddingLeft:30,
        marginTop:10,
        marginLeft:25,
        marginRight:50,
        padding:15,
        borderBottomColor:'#ACAAA9',
        borderBottomWidth:1,
        borderBottomLeftRadius:33,
        marginBottom:20
    },
    nameinput:{
        marginLeft:45, 
        borderBottomColor:'#ACAAA9',
        borderBottomWidth:1,
        borderBottomLeftRadius:10,
        marginRight:50,
        marginBottom:20

    },
    subjectinput:{
        marginLeft:45, 
        borderBottomColor:'#ACAAA9',
        borderBottomWidth:1,
        borderBottomLeftRadius:10,
        marginRight:50,
        marginBottom:20
    },
    msginput:{
        marginLeft:45, 
        borderBottomColor:'#ACAAA9',
        borderBottomWidth:1,
        borderBottomLeftRadius:10,
        marginRight:50,
        marginBottom:20
    },
    viewbutton:{
        backgroundColor:'#3dff00',
        marginLeft:45,
        marginRight:50,
        marginBottom:20,
        borderRadius:10
    },
    sumbittext:{
        color:'#f5fffa',
        fontSize:15,
        alignItems:"center",
        marginLeft:50,
        padding:10

    }

});

