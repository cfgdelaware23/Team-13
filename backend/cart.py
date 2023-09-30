from db import get_cart, add_product_to_cart, remove_product_from_cart, empty_cart

def getCart(user_id):
    pass

def addToCart(user_id, product_id):
    return add_product_to_cart(int(user_id), str(product_id), 1)

def subtractFromCart(user_id, product_id):
    pass

def deleteFromCart(user_id, product_id): 
    pass