import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPicker, setShowPicker] = useState(true);
  const [showViewAll, setShowViewAll] = useState(false);

  const categories = {
    Fruits: ['Apple', 'Banana', 'Orange'],
    Vegetables: ['Broccoli', 'Carrot', 'Lettuce'],
    Protein: ['Chicken', 'Fish', 'Tofu'],
  };

  const allItems = Object.values(categories).flat();

  const areButtonsDisabled = selectedCategory === null;

  return (
    <View style={styles.container}>
      {showPicker && !showViewAll && (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Select a Category" value={null} color="#3D5A80" />
            {Object.keys(categories).map((key) => (
              <Picker.Item key={key} label={key} value={key} color="#293241" />
            ))}
          </Picker>
          <View style={styles.confirmButtonContainer}>
            <TouchableOpacity 
              style={[
                styles.confirmButton,
                areButtonsDisabled && styles.disabledButton
              ]}
              onPress={() => areButtonsDisabled ? {} : setShowPicker(false)}
            >
              <Text style={styles.buttonText}>Confirm Choice</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.confirmButton, 
                { marginTop: 10 },
                areButtonsDisabled && styles.disabledButton
              ]}
              onPress={() => areButtonsDisabled ? {} : setShowViewAll(true)}
            >
              <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {selectedCategory && !showPicker && !showViewAll && (
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.changeButton} onPress={() => setShowPicker(true)}>
            <Text style={styles.changeButtonText}>Change Category</Text>
          </TouchableOpacity>
          <FlatList
            data={categories[selectedCategory]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
      )}

      {showViewAll && (
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.changeButton} onPress={() => {
            setShowViewAll(false);
            setShowPicker(true);
          }}>
            <Text style={styles.changeButtonText}>Go Back</Text>
          </TouchableOpacity>
          <FlatList
            data={allItems}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4DECB',
  },
  pickerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    marginBottom: 20,
  },
  pickerItem: {
    backgroundColor: '#E5E5E5',
    fontWeight: 'bold',
  },
  confirmButtonContainer: {
    padding: 20,
  },
  confirmButton: {
    backgroundColor: '#98C1D9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  changeButton: {
    backgroundColor: '#3D5A80',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#293241',
    fontWeight: 'bold',
    fontSize: 16,
  },
  changeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  item: {
    padding: 15,
    fontSize: 18,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    marginTop: 10,
    color: '#293241',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#D3D3D3',
  },
});

export default Category;
