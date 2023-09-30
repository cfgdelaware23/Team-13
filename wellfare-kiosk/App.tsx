import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CartItem from './components/CartItem';

const ex_product = {
  price: 15,
  name: "apple",
  sku: 12345,
  category: "fruit",
  imageURL: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
  location: "aisle 1"
}

const ex = {
startCount: 1,
product: ex_product
}

export default function App() {
  const [count, setCount] = useState(2);
  return (
    <View style={styles.container}>
      <CartItem startCount= {1} product= {ex_product}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
