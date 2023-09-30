import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Fruits = () => {
  return (
    <View style={styles.container}>
      <Text>Apples</Text>
      <Text>Bananas</Text>
      {/* ... more fruits */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Fruits;
