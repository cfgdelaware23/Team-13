import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './pages/welcome'; 
import Cart from './pages/cart'; 
import Category from './pages/category';
import Fruits from './pages/fruits';
import Vegetables from './pages/vegetables';
import Protein from './pages/protein';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartScrollable from './components/CartScrollable';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Category" component={Category} />
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
