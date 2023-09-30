import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ActivityIndicator, ScrollView } from 'react-native';
import { Divider, Text } from '@rneui/themed';
import { ListItem, Avatar } from '@rneui/themed'
import CartItem from './CartItem'
import {useFonts} from "expo-font"

interface Product {
    price: number;
    name: string;
    sku: number;
    category: string;
    imageURL: string;
    location: string;
    quantity: number;
  }

interface Props {
  shoppingList: Array<Product>
  setQuantity: (index: number, newVal: number) => void
}

const CartScrollable = ({shoppingList, setQuantity} : Props) => {
    const [fontsLoaded, fontError] = useFonts({
        'Agrandir': require('../assets/fonts/Agrandir-TextBold.otf'),
      });
    return(
        <ScrollView style={styles.scrollable}>
            <Text style={styles.h3Style}>{"Current Shopping List:"}</Text>
            <Divider width={3} />
        {
            
            shoppingList.map((l, key) => (
            <View>
                <CartItem product={l} index={key} setQuantity={setQuantity} />
            </View>
            
                
            ))
        }
        </ScrollView>
)}

const styles = StyleSheet.create({
    scrollable: {
        flex: 1,
        paddingTop: 30
    },
    h3Style: {
        fontFamily:"Agrandir",
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 10
      },

});

export default CartScrollable;
