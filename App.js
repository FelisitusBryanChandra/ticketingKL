// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStore } from 'redux'
// import { wrap } from 'jest-runtime/node_modules/@types/yargs';
// import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import {store} from './src/redux';



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
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
