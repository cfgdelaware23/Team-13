import { StyleSheet, View } from 'react-native'
import CartScrollable from '../components/CartScrollable';
import {Text} from '@rneui/themed';

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
  augmentationFunction: (a: number) => number
}

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

/** Component for Dummy Page */
const Cart = ({shoppingList, augmentationFunction} : Props) => {
    shoppingList = list;
    augmentationFunction = (n) => n / 2
    let currentTotalNoDiscount = 0;
    for (let i = 0; i < shoppingList.length; i++){
        currentTotalNoDiscount += shoppingList[i].price;
    }
    let currentTotal = augmentationFunction(currentTotalNoDiscount);
  return (
    <View style={styles.container}>
        <View style={[styles.listContainer, styles.shadowProp]}>
            <CartScrollable shoppingList={list}/>
        </View>
        <View style={styles.textContainer}>
            <Text h1>{"Current Total: $" + currentTotal}</Text>
            <Text h4>{"You saved $" + currentTotalNoDiscount}</Text>
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
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 5
  },
});

export default Cart;