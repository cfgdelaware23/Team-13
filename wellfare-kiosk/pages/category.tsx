import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FAB } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import RNHapticFeedback from 'react-native-haptic-feedback';
import { LinearGradient } from 'expo-linear-gradient';

const Category = ({ navigation }: { navigation: any }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [showPicker, setShowPicker] = useState(true);
  const [showViewAll, setShowViewAll] = useState(false);



  const categories = {
    Fruit: ['Apple', 'Banana', 'Orange', 'Strawberry', 'Watermelon', 'Pear'],
    Vegetable: ['Broccoli', 'Carrot', 'Lettuce'],
    Legume: ['Chicken', 'Fish', 'Tofu'],
  };
  async function fetchProducts(){
    const response = await fetch(`http://127.0.0.1:5000/products/${selectedCategory}`)
    const responseData = await response.json()
    setProductsByCategory(responseData.products.map((element:any)=>{
      return element.product_name
    }))
  }
  useEffect(()=>{
    if (selectedCategory !== null) fetchProducts()
  }, [selectedCategory])

  const allItems = Object.values(categories).flat();

  const areButtonsDisabled = selectedCategory === null;
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
    
  return (  
    <View style={styles.container}>
      <LinearGradient
        colors={['#FBEBDB', '#6F96A3']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradient}
      >
        {showPicker && !showViewAll && (
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedCategory}
              style={[styles.picker, styles.shadowProp]}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}
              itemStyle={[styles.pickerItem, styles.shadowProp]}
            >
              <Picker.Item
                label='Select a Category'
                value={null}
                color='#3D5A80'
              />
              {Object.keys(categories).map((key) => (
                <Picker.Item
                  key={key}
                  label={key}
                  value={key}
                  color='#293241'
                />
              ))}
            </Picker>
            <View style={styles.confirmButtonContainer}>
              <TouchableOpacity
                style={[
                  styles.confirmButton,
                  areButtonsDisabled && styles.disabledButton,
                ]}
                onPress={() => {
                  areButtonsDisabled ? {} : setShowPicker(false);
                }}
              >
                <Text style={styles.buttonText}>Confirm Choice</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.confirmButton,
                  { marginTop: 10 },
                  areButtonsDisabled && styles.disabledButton,
                ]}
                onPress={() => (areButtonsDisabled ? {} : setShowViewAll(true))}
              >
                <Text style={styles.buttonText}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
        {productsByCategory?.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No items in this category.</Text>
          </View>
        )}
      {selectedCategory && !showPicker && !showViewAll && (
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.changeButton} onPress={() => setShowPicker(true)}>
            <Text style={styles.changeButtonText}>Change Category</Text>
          </TouchableOpacity>
          <FlatList
            data={productsByCategory}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
            <Animatable.View animation="fadeInUp" delay={index * 150} useNativeDriver>
            <Text style={styles.item}>{item}</Text>
          </Animatable.View>
            )}
          />
        </View>
      )}
        {showViewAll && (
          <View style={styles.listContainer}>
            <TouchableOpacity
              style={styles.changeButton}
              onPress={() => {
                setShowViewAll(false);
                setShowPicker(true);
              }}
            >
              <Text style={styles.changeButtonText}>Go Back</Text>
            </TouchableOpacity>
            <FlatList
              data={allItems}
              keyExtractor={(item) => item}
              renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            />
          </View>
        )}
        <FAB
          icon={
            <MaterialCommunityIcons name='basket' color={'#c98e53'} size={25} />
          }
          color='#FAFAFA'
          placement='right'
          onPress={() => navigation.navigate('Cart')}
        />
      </LinearGradient>
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
  },
  picker: {
    borderRadius: 16,
    height: 50,
    width: '100%',
    backgroundColor: '#FAFAFA',
    marginTop: 50,
    marginBottom: 20,
    elevation: 3, // Android shadow
    shadowColor: 'black', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  pickerItem: {
    borderRadius: 16,
    backgroundColor: '#FAFAFA',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    height: 150,
  },
  shadowProp: {
    shadowColor: '#1E4182',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 5,
  },
  confirmButtonContainer: {
    padding: 20,
    marginTop: 80,
    marginBottom: 30,
  },
  confirmButton: {
    backgroundColor: '#1E4182',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: 'black',
    fontFamily: 'Helvetica',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  changeButton: {
    backgroundColor: '#1E4182',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
    fontFamily: 'Helvetica',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#FAFAFA',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 16,
  },
  changeButtonText: {
    color: '#FAFAFA',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 14,
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    padding: 15,
    fontSize: 18,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    marginTop: 10,
    color: '#293241',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    opacity: 0.95, // Just a hint of transparency for a glassy look
  },
  disabledButton: {
    backgroundColor: '#D3D3D3',
  },
  header: {
    backgroundColor: '#3D5A80',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#293241',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Category;
