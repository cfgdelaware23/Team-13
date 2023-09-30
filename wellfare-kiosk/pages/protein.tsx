import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Protein = () => {
  return (
    <View style={styles.container}>
      <Text>Chicken</Text>
      <Text>Steak</Text>
      {/* ... more Protein */}
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

export default Protein;
