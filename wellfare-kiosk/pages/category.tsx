// Category.tsx

import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPicker, setShowPicker] = useState(true);

  const categories = {
    Fruits: ['Apple', 'Banana', 'Orange'],
    Vegetables: ['Broccoli', 'Carrot', 'Lettuce'],
    Protein: ['Chicken', 'Fish', 'Tofu'],
  };

  return (
    <View style={styles.container}>
      {showPicker && (
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="Select a Category" value={null} />
          {Object.keys(categories).map((key) => (
            <Picker.Item key={key} label={key} value={key} />
          ))}
        </Picker>
      )}

      {selectedCategory && showPicker && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setShowPicker(false)}>
            <Text style={styles.buttonText}>Confirm Choice</Text>
          </TouchableOpacity>
        </View>
      )}

      {selectedCategory && !showPicker && (
        <>
          <TouchableOpacity style={styles.changeButton} onPress={() => setShowPicker(true)}>
            <Text style={styles.changeButtonText}>Change Category</Text>
          </TouchableOpacity>
          <FlatList
            data={categories[selectedCategory]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  changeButton: {
    backgroundColor: '#FF9800',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  changeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  item: {
    padding: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default Category;
