// Welcome.tsx

import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import contactlessIcon from '../assets/contactless-icon.png';
import wellfareLogo from '../assets/wellfareLogo.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
const Pulse = require('react-native-pulse').default;

const Welcome = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded, fontError] = useFonts({
    Agrandir: require('../assets/fonts/Agrandir-TextBold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FBEBDB', '#6F96A3']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradient}
      >
        <Image source={wellfareLogo} style={styles.wellfareLogo} />

        <Text style={styles.welcomeText}>Code for Good Kiosk Demo</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Pulse
            color='#6F96A3'
            numPulses={3}
            diameter={400}
            speed={20}
            duration={2000}
          />
          <Image source={contactlessIcon} style={styles.icon} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBEBDB',
  },
  icon: {
    marginLeft: 90,
  },
  wellfareLogo: {
    resizeMode: 'contain',
    width: 400,
    marginBottom: -350,
    marginTop: -350,
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: 'Agrandir',
    marginBottom: 40,
  },
  ring: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'tomato',
    borderWidth: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Welcome;
