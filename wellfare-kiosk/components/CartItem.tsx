import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text } from '@rneui/themed';
import { Button, Image } from '@rneui/themed';
import CartIncrement from './CartIncrement';
import { ListItem, Avatar } from '@rneui/themed';

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
  product: Product;
  index: number;
  setQuantity: (index: number, newVal: number) => void;
}


const CartItem = ({product, index, setQuantity} : Props) => {
    const [count, setCount] = useState(product.quantity);
    function setQuantityCount(newVal: number) {
        setQuantity(index, newVal);
        setCount(newVal);
    }
    return(
        <ListItem.Swipeable
            leftWidth={20}
            rightWidth={100}
            minSlideWidth={20}
            rightContent={(action) => (
                <Button
                containerStyle={{
                    flex: 1,
                    justifyContent: "center",
                    backgroundColor: "#c98e53",
                    maxHeight: "100%"
                }}
                type="clear"
                icon={{ name: "delete-outline" }}
                onPress={action}
                />
        )} containerStyle={styles.container} bottomDivider>
            <CartIncrement quantity={count} setQuantity={setQuantityCount}/>
            <Avatar
            rounded
            source={{ uri: product.imageURL }}
            />
            <ListItem.Content>
                <ListItem.Title>{product.name}</ListItem.Title>
                <ListItem.Subtitle>{product.location}</ListItem.Subtitle>
            </ListItem.Content>
            <Button color="#c98e53" size="md">{"$" + product.price}</Button>
        </ListItem.Swipeable>
    )
};

const styles = StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
        
      },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FAFAFA"
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        
    },
});

export default CartItem;
