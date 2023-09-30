// Welcome.tsx

import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import contactlessIcon from "../assets/contactless-icon.png"

const Welcome = ({ navigation }: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Food Kiosk!</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image source={contactlessIcon} style={styles.icon}/>
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
