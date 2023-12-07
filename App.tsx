// In App.js in a new project
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'

//importing screens here
import Home from './Screens/Home';
import Dashboard from './Screens/Dashboard';
import { Color } from './components/myTheme';
import BSheet from './components/BSheet';
import SingleProduct from './components/products/SingleProduct';
import MyCart from './components/products/MyCart';
import User from './Screens/User';
import Admin from './Screens/admin/Admin';


type paramList = {

}
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen


function App() {

  React.useEffect(()=>{
    const goldPrice = {
      carat22:5740.4,
      carat18:4696.5,
      carat24:6324
    }
    AsyncStorage.setItem("goldPrice", JSON.stringify(goldPrice))
  },[])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Color.gold} />
      <NavigationContainer >
        <Navigator screenOptions={{ animation: 'slide_from_right', headerShown: false }}>
          <Screen name='Admin' component={Admin} />
          <Screen name="User" component={User} />
          <Screen name="Home" component={Home} />
          <Screen name="SingleProduct" component={SingleProduct} />
          <Screen name="MyCart" component={MyCart} />
          <Screen name="Dashboard" component={Dashboard} />
          <Screen name='Bsheet' component={BSheet} />
          
        </Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;