import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { wrap } from 'jest-runtime/node_modules/@types/yargs';
import { connect } from 'react-redux';


  
  const Item = ({ type, image, eventName, date, paid }) => (
    <TouchableOpacity >
        <View style={styles.cardContainer}>
      <Image
      style={styles.image}
      source={{uri:image}}
      />
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.paid}>{paid}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item 
    type={item.type}
    image={item.image}
    eventName={item.eventName}
    date={item.date}
    paid={item.paid} />  
  );

class Home extends React.Component{

    

    render(){
        return(
    <View style={styles.container}>
      <Text
      style={styles.header}
      >Explore Event</Text>

      <Text
      style={styles.subHeader}
      >Featured Events</Text>

        <FlatList
        horizontal={true}
        data={this.props.DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        <Text
        style={styles.subHeader}
        >Ap aja</Text>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // padding:20,
        backgroundColor:"#212121",
        // height:'100%'
    },
    cardContainer:{
        // width:'100%'
        flex:1,
        marginHorizontal:10,
        padding:10,
        height:1
        // justifyContent:'center',
        // alignItems:'center'
    },
    header:{
        color:"#fff", 
        fontSize:30, 
        fontWeight:'bold', 
        marginBottom:"10%",
        padding:20
    },
    subHeader:{
        color:"#fff",
        fontSize:20,
        fontWeight:'bold',
        padding:20
    },
    image:{
        width:300,
        height:200,
        borderRadius:10,
        opacity:0.7
    },
    type:{
        color:'#fff',
        position:'absolute',
        fontSize:20,
        marginLeft:20,
        marginTop:10
    },
    eventName:{
        color:"#fff",
        position:'absolute',
        fontSize:28,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:30
    },
    date:{
        color:"#fff",
        position:'absolute',
        fontSize:18,
        marginLeft:20,
        marginTop:60
    },
    paid:{
        color:"#fff",
        position:'absolute',
        backgroundColor:'#4f4f4f',
        padding:10,
        fontSize:18,
        marginLeft:20,
        marginTop:155,
        borderRadius:8,
        opacity:0.8
    }
})

function mapStateToProps(state){
    return{
        DATA: state.TICKET
    }
}

export default connect(mapStateToProps)(Home);