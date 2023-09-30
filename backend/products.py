from db import get_product_info, get_products_of_type, get_products
import json

# get product info
def getProductInfo(product_id):
    return get_product_info()

def getProductType(type):
    return get_products_of_type()

def getProducts():
    return get_products()