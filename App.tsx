// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens here
import Home from './Screens/Home';
import Dashboard from './Screens/Dashboard';
import { Color } from './components/myTheme';
import BSheet from './components/BSheet';
import SingleProduct from './components/products/SingleProduct';
import MyCart from './components/products/MyCart';



const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen


function App() {
  return (
    <>
    <StatusBar backgroundColor={Color.gold}/>
    <NavigationContainer >
      <Navigator screenOptions={{animation:'slide_from_right', headerShown:false}}>
        <Screen name="MyCart" component={MyCart} />
        <Screen name="SingleProduct" component={SingleProduct} />
        <Screen name="Home" component={Home} />
        <Screen name="Dashboard" component={Dashboard} />
        <Screen name='Bsheet' component={BSheet}/>
      </Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;