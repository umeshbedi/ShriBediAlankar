// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens here
import Home from './Screens/Home';
import Dashboard from './Screens/Dashboard';



const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen


function App() {
  return (
    <NavigationContainer >
      <Navigator screenOptions={{animation:'slide_from_right'}}>
        <Screen name="Home" component={Home} />
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;