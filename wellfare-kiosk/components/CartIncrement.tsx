import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';
import { Button } from '@rneui/themed';

interface Props {
    setQuantity: (newVal: number) => void;
    quantity: number;
}

const CartIncrement = ({ setQuantity, quantity }: Props) => (
    <View>
            <Button
                type="clear"
                size="sm"
                icon={{
                    name: 'arrow-up',
                    type: 'font-awesome',
                    size: 12,
                    color: 'grey',
                }}
                containerStyle={{
                    height: 20,
                    width: 40,
                }}
                onPress= {() => setQuantity(quantity + 1)}
            />
            <Text style={styles.text}>{quantity}</Text>
            <Button
                type="clear"
                size="sm"
                icon={{
                    name: 'arrow-down',
                    type: 'font-awesome',
                    size: 12,
                    color: 'grey',
                }}
                containerStyle={{
                    height: 40,
                    width: 40,
                    marginBottom: -20
                }}
                onPress= {() => setQuantity(Math.max(quantity - 1, 0))}
            />
    </View>
);

const styles = StyleSheet.create({
    text: {
        marginLeft: 15.5
      },
});

export default CartIncrement;
