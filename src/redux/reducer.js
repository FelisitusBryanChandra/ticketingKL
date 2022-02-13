import { combineReducers } from "redux"

const initialStateTicket = {
    TICKET:[
        {
                id: '1',
                type: 'Concert',
                eventName:'Metallica',
                image:'https://www.nadanadi.com/wp-content/uploads/2019/04/metallica1.jpg',
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
                paid: 'free',
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
    form:[
        {
        name:''
    }
    ]
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
    if(action.type === 'SET_NAME'){
        return{
            form:{
                [action.inputType]: action.inputValue,
            },
        }
    }
    if(action.type === 'CONFIRM_NAME'){
        return{            
            form:[action.inputValue]          
        }
    }
    return state
}

const reducer = combineReducers({
    userReducer,
    ticketReducer,
    registerReducer
});


export default reducer;