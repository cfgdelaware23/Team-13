import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ActivityIndicator, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ListItem, Avatar } from '@rneui/themed'
import CartItem from './CartItem'

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

    return(
        <ScrollView style={styles.scrollable}>
            <Text style={styles.h3Style}>{"Current Shopping List:"}</Text>
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
        fontFamily:"Helvetica",
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 10
      },

});

export default CartScrollable;
