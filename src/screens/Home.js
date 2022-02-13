import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { wrap } from 'jest-runtime/node_modules/@types/yargs';
import { connect } from 'react-redux';

const DATA = [
    {
      id: '1',
      image:'',
      type: 'Concert',
    },
    {
      id: '2',
      image:'',
      type: 'Exhibition',
    },
    {
      id: '3',
      image:'',
      type: 'Event',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{type}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

class Home extends React.Component{

    

    render(){
        return(
    <View style={styles.container}>
      <Text
      style={styles.header}
      >Explore Event</Text>
    
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

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
        marginBottom:"20%"
    },
    title:{
        color:'#fff'
    }
})

function mapStateToProps(state){
    return{
        DATA: state.DATA
    }
}

export default connect(mapStateToProps)(Home);