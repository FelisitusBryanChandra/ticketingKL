import { combineReducers } from "redux"
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialStateTicket = {
    TICKET:[
        {
                id: '1',
                type: 'Concert',
                eventName:'Metallica',
                image:'https://static.republika.co.id/uploads/images/inpicture_slide/band-heavy-metal-metallica-tampil-roskilde-festival-di-roskilde-_130717112709-441.jpg',
                date:'12 July 2022',
                address: 'Palace Garden',
                paid: '$$$',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '2',
                type: 'Exhibition',
                eventName:'Saree Exhibition',
                image:'https://aperture.org/wp-content/uploads/2020/08/IMG_0101.jpg',
                date:'10 March 2022',
                address:'Malleswaram Grounds',
                paid: 'Free',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '3',
                type: 'Event',
                eventName:'Wine Tasting',
                image:'https://yukorder.com/wp-content/uploads/2019/10/Tentang-Wine-Red-Wine-e1571388879216.jpg',
                date:'12 July 2022',
                address:'Links Brewery',
                paid: '$$$',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '4',
                type: 'Seminar',
                eventName:'Startup Meets',
                image:'https://sanggabuana.ac.id/wp-content/uploads/2017/09/Medical-weed-business-seminar1.jpg',
                date:'2 August 2022',
                address:'Kanteerava Indoor Stadium',
                paid: '$$$',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '5',
                type: 'Party',
                eventName:'Summer Noon Party',
                image:'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/pool-party.jpg',
                date:'5 September 2022',
                address:'Kumara Park',
                paid: '$$$',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '6',
                type: 'Concert',
                eventName:'Rock and Roll Nights',
                image:'https://www.minews.id/wp-content/uploads/2020/11/Metallica-Konser-di-Jakarta-Indonesia.jpg',
                date:'1 October 2022',
                address:'Sarjapur Road',
                paid: '$$$',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '7',
                type: 'Food Party',
                eventName:'Barbercue Fridays',
                image:'https://asset.kompas.com/crops/-ipSwcFCfRKgFbkJDTS0usU50DQ=/29x12:997x657/750x500/data/photo/2021/12/28/61caf06029488.jpg',
                date:'14 October 2022',
                address:'Whitefield',
                paid: '$$$',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '8',
                type: 'Workshop',
                eventName:'Summer Workshop',
                image:'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2021/07/Pengertian-Workshop.jpg',
                date:'18 October 2022',
                address:'Indiranagar',
                paid: 'Free',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '9',
                type: 'Event',
                eventName:'Impressions & Expressions',
                image:'https://tt-wp-insider.imgix.net/2018/04/06COMEDY1_SPAN-articleLarge.jpg',
                date:'23 October 2022',
                address:'MG Road',
                paid: 'Free',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
              {
                id: '10',
                type: 'Carnival',
                eventName:'Italian Carnival',
                image:'https://www.eataly.com/wp/wp-content/uploads/2016/02/resources-2-mask-san-marco-freeteo-depositphotos_5132857_m.jpg',
                date:'24 February 2023',
                address:'Electronic City',
                paid: 'Free',
                desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              },
    ],
    gridView: true,
    image:'https://cdn-icons.flaticon.com/png/512/1665/premium/1665712.png?token=exp=1644757252~hmac=4a57cc9b084d257513d2ae4d76c4f9e6'
}

const initialStateUser ={
    USER:[
    {
        id:1,
        name: 'Sarah',
        ticketId:[1,2]
    }
    ]
}

const initialStateRegister = {
    form:[]
}

const userReducer = (state = initialStateUser, action) => {

    return state
}

const ticketReducer = (state = initialStateTicket, action) => {
    if(action.type === "CHANGE_FILTER"){
        return {
            ...state,
            gridView:!state.gridView,
        }
    }

    return state
}

const registerReducer = (state = initialStateRegister, action   ) => {

    switch(action.type){
        case 'SET_NAME':
            return{
                form:{
                    [action.inputType]: action.inputValue,
                },
            }
        case 'CONFIRM_NAME':
            return{            
                form:action.inputValue,
                // name:[state.name + action.inputValue]
                // form: state.form.concat({id:Math.random(), name:state.name + action.inputValue})         
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    userReducer,
    ticketReducer,
    registerReducer
});


export default reducer;