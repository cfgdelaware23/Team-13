import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Vegetables = () => {
  return (
    <View style={styles.container}>
      <Text>Lettuce</Text>
      <Text>Tomatoes</Text>
      {/* ... more vegetables */}
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

export default Vegetables;
