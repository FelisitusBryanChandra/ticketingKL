import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class TicketDetails extends React.Component{
render(){
    const {image, type, eventName, date, paid, desc}= this.props.route.params
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Ticket Details</Text>
            <Image
            style={styles.image}
            source={{uri:image}}
            />
                
            <ScrollView>
                <View style={{flexDirection:'row'}}>
                    <View style={[styles.subContainer,{flex:5}]}>
                        <Text style={styles.type}>{type}</Text>
                        <Text style={styles.subheader}>{eventName}</Text>
                        <Text style={styles.date}>Date: {date}</Text>
                    </View>
                    <View style={[styles.subContainer,{flex:1}]}>
                        <Text style={styles.paid}>{paid}</Text>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderText}>Buy</Text>    
                        </TouchableOpacity>                   
                    </View>
                </View>
                <Text style={{color:'#fff', fontSize:18, padding:10, textAlign:'center'}}>{desc}</Text>
            </ScrollView>    
        </View>
    )}    
}

function mapStateToProps(state){
    return{
        DATA: state.ticketReducer.TICKET,
        DATA2: state.ticketReducer
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // padding:20,
        backgroundColor:"#212121"
    },
    subContainer:{
        paddingHorizontal:20,
        paddingVertical:10,
    },
    header:{
        color:"#fff",
        fontSize:30, 
        padding:20,
        fontWeight:'bold', 
        // position:'absolute'
    },
    type:{
        color:"#fff",
        fontSize:18
    },
    subheader:{
        color:"#fff", 
        fontSize:30, 
        fontWeight:'bold'
    },
    date:{
        color:"#fff"
    },
    image:{
        width:'100%',
        height:'40%',
        alignSelf:'center',
        marginVertical:'5%'
    },
    paid:{
        color:'#000',
        fontSize:18,
        fontWeight:'bold',
        // textAlign:'right',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:8,
        right:10  
    },
    orderButton:{
        marginTop:'10%',
        padding:10,
        borderRadius:9,
        right:10,
        backgroundColor:'#53ed72'
    },
    orderText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000' 
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

export default connect(mapStateToProps)(TicketDetails);