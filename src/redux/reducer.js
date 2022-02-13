initialState = {
    DATA:[
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
                image:'https://www.nadanadi.com/wp-content/uploads/2019/04/metallica1.jpg',
                date:'12 July 2022',
                address:'Links Brewery',
                paid: '$$$',
              },
    ]
}

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;