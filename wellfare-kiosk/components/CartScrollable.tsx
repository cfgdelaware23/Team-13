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
  }

interface Props {
  shoppingList: Array<Product>
}

const CartScrollable = ({shoppingList} : Props) => {

    return(
        <ScrollView style={styles.scrollable}>
            <Text h3>{"Current Shopping List:"}</Text>
        {
            
            shoppingList.map((l, i) => (
            <CartItem startCount={1} product={l} key={i}/>
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
        fontFamily: 'Helvetica-Bold',
        fontWeight: '300',
      },

});

export default CartScrollable;
