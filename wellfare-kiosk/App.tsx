import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartIncrement from './components/CartIncrement';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(2);
  return (
    <View style={styles.container}>
      <CartIncrement setCount = {setCount} count = {count}/>
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
