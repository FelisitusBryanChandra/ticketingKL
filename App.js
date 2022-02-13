// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from './src/redux';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import TicketDetails from './src/screens/TicketDetails';
import Profile from './src/screens/Profile';



const Stack = createNativeStackNavigator();

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Register" 
        component={Register}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{headerShown:false}} 
        />
        <Stack.Screen 
        name="TicketDetails" 
        component={TicketDetails}
        options={{headerShown:false}} 
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile}
        options={{headerShown:false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
