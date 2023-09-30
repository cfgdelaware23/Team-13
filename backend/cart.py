from db import get_cart, add_product_to_cart, remove_product_from_cart, empty_cart, get_cart, get_product_info
from products import getProductInfo

def getCart(user_id):
    cart_meta_data, cart_products = get_cart(str(user_id))

    shopping_cart = []
    for id, quantity in cart_products:
        product = getProductInfo(id)
        product["quantity"] = quantity
        shopping_cart.append(product)

    return {
        "user_id":cart_meta_data[0],
        "total":cart_meta_data[1],
        "money_saved":cart_meta_data[2],
        "shopping_cart": shopping_cart
    }
    
def addToCart(user_id, product_id):
    return add_product_to_cart(int(user_id), str(product_id), 1)

def subtractFromCart(user_id, product_id):
    pass

def deleteFromCart(user_id, product_id): 
    
    pass