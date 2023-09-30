from db import get_product_info, get_products_of_type, get_products
import json

# get product info
def getProductInfo(product_id):
    return get_product_info(product_id)

def getProductCategory(category):
    return get_products_of_type(category)

def getProducts():
    return get_products()