// Welcome.tsx

import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import contactlessIcon from "../assets/contactless-icon.png";
const Pulse = require('react-native-pulse').default;

const Welcome = ({ navigation }: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Food Kiosk!</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image source={contactlessIcon} style={styles.icon}/>
        <Pulse color='#6F96A3' numPulses={3} diameter={200} speed={20} duration={2000} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:
  {
    marginLeft: 90,
  },
  welcomeText:{
    fontSize: 40,
    fontFamily: "Trebuchet MS",
    marginBottom: 40
  },
  ring: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: "tomato",
    borderWidth: 10,
  },
});

export default Welcome;
