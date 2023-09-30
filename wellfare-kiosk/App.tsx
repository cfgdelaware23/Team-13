import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './components/welcome'; 
import Category from './components/category';
import Fruits from './components/fruits';
import Vegetables from './components/vegetables';
import Protein from './components/protein';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CartScrollable from './components/CartScrollable';


const Stack = createStackNavigator();

export default function App() {

  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Welcome" component={Welcome} />
       </Stack.Navigator>
     </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
