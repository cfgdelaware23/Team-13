import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ActivityIndicator, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ListItem, Avatar } from '@rneui/themed'
import CartItem from './CartItem'

const CartScrollable = () => {
    const list = [
        {
            price: 15,
            name: "apple",
            sku: 12345,
            category: "fruit",
            imageURL: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
            location: "aisle 1"
          },
      {
        price: 15,
        name: "apple",
        sku: 12345,
        category: "fruit",
        imageURL: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
        location: "aisle 1"
      },
    ];

    return(
        <ScrollView>
        {
            list.map((l, i) => (
            <CartItem startCount={1} product={l} style={styles.card}/>
            ))
        }
        </ScrollView>
)}

const styles = StyleSheet.create({
    card: {
        height: 1000
      },
});

export default CartScrollable;