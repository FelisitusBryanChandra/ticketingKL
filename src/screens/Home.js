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

    <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
        <Image
        style={styles.list}
        source={{uri:"https://cdn-icons.flaticon.com/png/512/1665/premium/1665684.png?token=exp=1644756560~hmac=01fb7e09ab15d9be4a1957972a7377a9"}}
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
        <Image
        style={styles.grid}
        source={{uri:"https://cdn-icons.flaticon.com/png/512/1665/premium/1665712.png?token=exp=1644757252~hmac=4a57cc9b084d257513d2ae4d76c4f9e6"}}
        />
        </TouchableOpacity>
    </View>
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
        backgroundColor:"#333",
    },
    filterContainer:{
        
        flexDirection:'row',
        justifyContent:'center'
    },
    filterButton:{
        backgroundColor:'#333',
        padding:20,
        width:'20%',
        alignSelf:'center',
        borderRadius:9,
        shadowColor: "#fff",
        marginHorizontal:10,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 16
    },
    list:{
        width:40,
        height:40,
        alignSelf:'center'
    },
    grid:{
        width:40,
        height:40,
        alignSelf:'center'
    },
    cardContainer:{
        // width:'100%'
        flex:3,
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
        // marginBottom:"5%",
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