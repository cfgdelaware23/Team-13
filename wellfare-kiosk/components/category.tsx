import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Category = ({ navigation }: {navigation:any}) => {
  return (
    <View style={styles.container}>
      <Button title="Fruits" onPress={() => navigation.navigate('Fruits')} />
      <Button title="Vegetables" onPress={() => navigation.navigate('Vegetables')} />
      <Button title="Protein" onPress={() => navigation.navigate('Protein')} />
      {/* ... more categories */}
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

export default Category;
