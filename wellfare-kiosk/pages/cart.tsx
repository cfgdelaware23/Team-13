import { StyleSheet, View } from 'react-native'
import CartScrollable from '../components/CartScrollable';
import {FAB, Text} from '@rneui/themed';
import { useEffect, useState } from 'react';
import CategoryBtn from "../components/CategoryBtn"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  augmentationFunction: (a: number) => number
  navigation: {navigation: any}
}

const list = [
    {
        price: 15,
        name: "Apple",
        sku: 12345,
        category: "fruit",
        imageURL: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
        location: "Aisle 1",
        quantity: 2
      },
      {
        price: 15,
        name: "Apple",
        sku: 12345,
        category: "fruit",
        imageURL: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
        location: "Aisle 1",
        quantity: 2
      },
  
];

/** Component for Dummy Page */
 const Cart = ({shoppingList, augmentationFunction, navigation} : Props) => {

    const [fontsLoaded, fontError] = useFonts({
        'Agrandir': require('../assets/fonts/Agrandir-TextBold.otf'),
      });

    shoppingList = list;
    let temp = 0;
    augmentationFunction = (n) => n / 3
    for (let i = 0; i < shoppingList.length; i++){
        temp += shoppingList[i].price * shoppingList[i].quantity;
    }
    let currentTotalNoDiscount = temp;
    const [currentTotal, setcurrentTotal] = useState(augmentationFunction(currentTotalNoDiscount));

    function setQuantity(key: number, newVal: number){
        shoppingList[key].quantity = newVal;

        let temp = 0;
        for (let i = 0; i < shoppingList.length; i++){
            temp += shoppingList[i].price * shoppingList[i].quantity;
        }
        currentTotalNoDiscount = temp;
        setcurrentTotal(augmentationFunction(currentTotalNoDiscount));
    }

  return (
    <View style={styles.container}>
        <View style={[styles.listContainer, styles.shadowProp]}>
            <CartScrollable shoppingList={list} setQuantity={setQuantity}/>
        </View>
        <View style={styles.textContainer}>
            <Text h1 style={styles.h1Style}>{"Current Total: $" + currentTotal}</Text>
            <Text h4 style={styles.h4Style}>{"You saved $" + (currentTotalNoDiscount - currentTotal)}</Text>
            <FAB
                icon={<MaterialCommunityIcons name="view-list" color={"white"} size={25}/>}
                color="#6F96A3"
                placement="right"
                onPress={() => navigation.navigate('Category')}
        />
        </View>
        
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center'
  },
  listContainer: {
    flex: 1,
    flexGrow: 1,
    boxShadow: "10px",
    backgroundColor: "#FAFAFA",
  },
  textContainer: {
    flex: 2,
    flexGrow: 2,
    justifyContent: "center",
    backgroundColor: "#FBEBDB",
    paddingLeft: 50
  },
  shadowProp: {
    shadowColor: '#c98e53',
    shadowOffset: {width: 5, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 5
  },
  h1Style: {
    fontFamily: 'Agrandir',
    fontSize: 72,
    marginLeft: 20
  },
  h4Style: {
    fontFamily: 'Helvetica',
    fontWeight: "bold",
    marginLeft: 20
  },
});

export default Cart;