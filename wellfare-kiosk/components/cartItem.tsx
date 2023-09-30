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
  }

interface Props {
  startCount?: number;
  product: Product;
}


const CartItem = ({startCount, product} : Props) => {
    if (typeof startCount == 'undefined') {
        startCount = 1;
    }
    const [count, setCount] = useState(startCount);

    return(
        <ListItem.Swipeable
            leftWidth={80}
            rightWidth={90}
            minSlideWidth={40}
            rightContent={(action) => (
                <Button
                containerStyle={{
                    flex: 1,
                    justifyContent: "center",
                    backgroundColor: "#f4f4f4",
                }}
                type="clear"
                icon={{ name: "delete-outline" }}
                onPress={action}
                />
        )} style={styles.container} bottomDivider>
            <CartIncrement count={count} setCount={setCount}/>
            <Avatar
            rounded
            source={{ uri: product.imageURL }}
            />
            <ListItem.Content>
                <ListItem.Title>{product.name}</ListItem.Title>
                <ListItem.Subtitle>{"$" + product.price}</ListItem.Subtitle>
                <ListItem.Subtitle>{product.location}</ListItem.Subtitle>
            </ListItem.Content>
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
        height: 50
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
    },
});

export default CartItem;