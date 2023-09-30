// Welcome.tsx

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Welcome = ({ navigation }: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Food Kiosk!</Text>
      <Button title="Go to Categories" onPress={() => navigation.navigate('Category')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
