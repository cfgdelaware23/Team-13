// Welcome.tsx
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Button } from 'react-native';

const Welcome: React.FC<{ navigation: any }> = ({ navigation }) => {
  
  return (
    <View style={styles.container}>

      <Text style={styles.welcomeText}>Welcome to Food Kiosk</Text>
      <Text style={styles.subText}>Choose your favorite food and add to cart</Text>
      <Button title="Go to Categories" onPress={() => navigation.navigate('Category')} color="red"/>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 24,
    marginTop: 10,
    color: '#666',
  },
  buttonStyle: {
    backgroundColor: 'blue', // Change to your desired background color
    color: 'white', // Change to your desired text color
    padding: 10,
    borderRadius: 5, // Optional: add rounded corners
    marginTop: 10, // Optional: add margin to separate it from other elements
  },

});

export default Welcome;
