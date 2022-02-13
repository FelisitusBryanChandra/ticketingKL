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
              },
              {
                id: '2',
                type: 'Exhibition',
                eventName:'Saree Exhibition',
                image:'https://aperture.org/wp-content/uploads/2020/08/IMG_0101.jpg',
                date:'10 March 2022',
                address:'Malleswaram Grounds',
                paid: 'free',
              },
              {
                id: '3',
                type: 'Event',
                eventName:'Wine Tasting',
                image:'https://yukorder.com/wp-content/uploads/2019/10/Tentang-Wine-Red-Wine-e1571388879216.jpg',
                date:'12 July 2022',
                address:'Links Brewery',
                paid: '$$$',
              },
              {
                id: '4',
                type: 'Seminar',
                eventName:'Startup Meets',
                image:'https://sanggabuana.ac.id/wp-content/uploads/2017/09/Medical-weed-business-seminar1.jpg',
                date:'2 August 2022',
                address:'Kanteerava Indoor Stadium',
                paid: '$$$',
              },
              {
                id: '5',
                type: 'Party',
                eventName:'Summer Noon Party',
                image:'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/pool-party.jpg',
                date:'5 September 2022',
                address:'Kumara Park',
                paid: '$$$',
              },
    ]
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
    form:{name:''}
}

const userReducer = (state = initialStateUser, action) => {

    return state
}

const ticketReducer = (state = initialStateTicket, action) => {
    return state
}

const registerReducer = (state = initialStateRegister, action) => {
    if(action.type === 'SET_NAME'){
        return{
            form:{
                [action.inputType]: action.inputValue
            }
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