import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './pages/welcome'; 
import Category from './pages/category';
import Fruits from './pages/fruits';
import Vegetables from './pages/vegetables';
import Protein from './pages/protein';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Fruits" component={Fruits} />
        <Stack.Screen name="Vegetables" component={Vegetables} />
        <Stack.Screen name="Protein" component={Protein} />

        {/* ... Other category screens like Vegetables, Protein, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="Welcome" component={Welcome} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
