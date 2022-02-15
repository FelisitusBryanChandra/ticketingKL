import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';


class Home extends React.Component{

    renderItem = (item) => (
        <TouchableOpacity
        onPress={()=> this.props.navigation.navigate('TicketDetails',{
            image:item.image,
            type: item.type,
            eventName: item.eventName,
            date: item.date,
            paid: item.paid,
            desc: item.desc,
            address: item.address
        })}
        >
            <View style={styles.cardContainer}>
          <Image
          style={this.props.DATA2.gridView ? styles.image : styles.image2}
          source={{uri:item.image}}
          />
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.eventName}>{item.eventName}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={this.props.DATA2.gridView ? styles.paid2 : styles.paid}>{item.paid}</Text>
          </View>
        </TouchableOpacity>
      );

    dispatch=()=>{
        useDispatch();
    }

    constructor(){
        super();
        this.state={
            image:'https://cdn-icons.flaticon.com/png/512/1665/premium/1665712.png?token=exp=1644757252~hmac=4a57cc9b084d257513d2ae4d76c4f9e6'
        }
    }

    onPressFilter=()=>{
    const gridView = this.props.DATA2.gridView    
    const dispatch = this.props.dispatch

    dispatch({type:"CHANGE_FILTER"})
    console.log(gridView)
    
    if(!gridView){
        this.setState({image:'https://cdn-icons.flaticon.com/png/512/1665/premium/1665712.png?token=exp=1644757252~hmac=4a57cc9b084d257513d2ae4d76c4f9e6'})
    }
    else{
        this.setState({image:'https://cdn-icons.flaticon.com/png/512/1665/premium/1665684.png?token=exp=1644756560~hmac=01fb7e09ab15d9be4a1957972a7377a9'})
    }
    }

    onPressButton =()=>{
        const name = this.props.route.params
        const navigation = this.props.navigation
        navigation.navigate('Profile',{
            name: name
        })
        console.log(name)
    }

    render(){

        const name = this.props.route.params
        console.log("Name is", name.name)

        return(
    <View style={styles.container}>
      <Text
      style={styles.header}
      >Explore Event</Text>

    <View style={styles.filterContainer}>
        <TouchableOpacity 
        style={styles.filterButton}
        onPress={()=> this.onPressFilter()}
        >
        <Image
        style={styles.list}
        source={{uri:this.state.image}}
        />
        </TouchableOpacity>
    </View>
    
      <Text
      style={styles.subHeader}
      >Featured Events</Text>

        <ScrollView>
            <SafeAreaView style={{alignItems:'center', marginBottom:'20%'}}>
                <FlatList
                horizontal={this.props.DATA2.gridView}
                data={this.props.DATA}
                renderItem={({item})=>this.renderItem(item)}
                keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </ScrollView>

    <TouchableOpacity
    style={styles.profButton}>
        <Image
        style={styles.prof}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/1177/1177568.png'}}
        />
        <Text style={styles.name}>{name.name}</Text>
    </TouchableOpacity>
    </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#212121",
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    filterButton:{
        backgroundColor:'#fff',
        padding:20,
        width:'20%',
        alignSelf:'center',
        borderRadius:9,
        shadowColor: "#000",
        marginHorizontal:10,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24
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
        marginHorizontal:10,
        margin:10,
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
        height:400,
        borderRadius:18,
        opacity:0.5
    },
    image2:{
        width:350,
        height:200,
        borderRadius:18,
        opacity:0.5
    },
    type:{
        color:'#fff',
        position:'absolute',
        fontSize:16,
        marginLeft:20,
        marginTop:10
    },
    eventName:{
        color:"#fff",
        position:'absolute',
        fontSize:22,
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
        fontWeight:'bold',
        padding:10,
        fontSize:18,
        marginLeft:20,
        marginTop:140,
        borderRadius:8,
        opacity:0.8
    },
    paid2:{
        color:"#fff",
        position:'absolute',
        backgroundColor:'#4f4f4f',
        fontWeight:'bold',
        padding:10,
        fontSize:18,
        marginLeft:20,
        marginTop:340,
        borderRadius:8,
        opacity:0.8
    },
    profButton:{
        backgroundColor:'#fff',
        borderRadius:30,
        width:'40%',
        padding:5,
        margin:5,
        left:10,
        bottom:10,
        position:'absolute',
        alignSelf:'baseline',
        flexDirection:'row'

    },
    prof:{
        width:50,
        height:50,
        
    },
    name:{
        color:'#000',
        fontSize:17,
        fontWeight:'bold',
        marginHorizontal:"10%",
        textAlignVertical:'center',
        // textAlign:'center'
    }
})

function mapStateToProps(state){
    return{
        DATA: state.ticketReducer.TICKET,
        DATA2: state.ticketReducer
    }
}

export default connect(mapStateToProps)(Home);