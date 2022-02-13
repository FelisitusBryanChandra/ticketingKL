import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { wrap } from 'jest-runtime/node_modules/@types/yargs';
import { connect } from 'react-redux';


class Register extends React.Component{

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
      // onChangeText={onChangeText}
      // value={text}
      />
      <TouchableHighlight
      style={styles.button}
        onPress={() => this.props.navigation.navigate('Home')}
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
        marginBottom:20
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
        borderRadius:5, 
        color:"#fff", 
        paddingHorizontal:10
    },
    button:{
        backgroundColor:"#0b60a1", 
        width:"30%", 
        height:"7%",
        alignSelf:'center', 
        marginVertical:50, 
        borderRadius:8
    },
    textButton:{
        color:"#fff", 
        fontWeight:'bold',
        textAlign:"center", 
        marginTop:'10%',
        fontSize:16
    }
})

function mapStateToProps(state){
    return{
        DATA: state.TICKET
    }
}

export default connect(mapStateToProps)(Register);