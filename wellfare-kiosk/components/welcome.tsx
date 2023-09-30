// Welcome.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Food Kiosk</Text>
      <Text style={styles.subText}>Choose your favorite food and add to cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
  },
});

export default Welcome;
