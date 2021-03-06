import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet, TextInput, ToastAndroid, Alert } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createUser} from '../redux/action'

class Register extends React.Component{

    
    dispatch=()=>{
        useDispatch();
    }


    onInputChange = (value, input) => {
        const dispatch = this.props.dispatch
        dispatch({type: 'SET_NAME', inputType: input, inputValue: value})
    }



    sendData=(value)=>{

        const dispatch = this.props.dispatch
        const DATA = this.props.DATA


        if(value == undefined || DATA.name == undefined){
            Alert.alert('Alert', 'Please fill in your name!');
            return;
        }
        if(value == "" || DATA.name == ""){
            Alert.alert('Alert', 'Please fill in your name!');
            return;
        }

        this.props.navigation.navigate('Home', {
            name: DATA.name
        });
        dispatch({type:'CONFIRM_NAME', inputValue: value})
    }
    
    

    render(){
        return(
    <View style={styles.container}>
      <Text style={styles.header}>Register Screen</Text>
        <Image
        source={{uri:"https://cdn-icons-png.flaticon.com/512/3048/3048301.png"}}
        style={styles.image}
        />
      <Text style={styles.subheader}>Name</Text>
      <TextInput
      style={styles.textInput}
      placeholder="Enter your name here"
      onChangeText={value => this.onInputChange(value,'name')}
    //   value={}
      />
      <TouchableHighlight
      style={styles.button}
        onPress={()=>this.sendData(JSON.stringify(this.props.DATA.name))}
      >
        <Text style={styles.textButton}>Confirm</Text>
      </TouchableHighlight>
    </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#212121"
    },
    header:{
        color:"#fff",
        fontSize:30, 
        fontWeight:'bold', 
        // marginBottom:"%"
    },
    subheader:{
        color:"#fff", 
        fontSize:20, 
        marginBottom:20,
        fontWeight:'bold'
    },
    image:{
        width:'100%',
        height:'50%',
        alignSelf:'center',
        marginVertical:'10%'
    },
    textInput:{
        height:40, 
        width:"100%", 
        backgroundColor:"#3d3d3d", 
        borderRadius:10, 
        color:"#fff", 
        paddingHorizontal:10
    },
    button:{
        backgroundColor:'#53ed72', 
        width:"30%", 
        height:"7%",
        alignSelf:'center', 
        marginVertical:50, 
        borderRadius:18
    },
    textButton:{
        color:"#fff", 
        fontWeight:'bold',
        textAlign:"center", 
        textAlignVertical:'center',
        marginTop:'10%',
        fontSize:18
    }
})

function mapStateToProps(state){
    return{
        DATA: state.registerReducer.form,
        DATA2: state.registerReducer
    }
}

export default connect(mapStateToProps)(Register);