from db import get_product_info, get_products_of_type, get_products
import json

# get product info
def getProductInfo(product_id):

    product_details = get_product_info(product_id)
    return {
        "product_id": int(product_details[0]), 
        "product_price": float(product_details[1]), 
        "name":product_details[2], 
        "sku": int(product_details[3]), 
        "category":product_details[4],
        "image_url":product_details[5]
    }

def getProductCategory(category):
    
    formatted_products = []
    for product_details in get_products_of_type(category): 
        product = {
            "price": float(product_details[0]), 
            "product_name": (product_details[1]), 
            "sku":int(product_details[2]), 
            "category":category,
            "image_url":(product_details[3]), 
            "product_id":int(product_details[4])
        }
        
        formatted_products.append(product)
    # return get_products_of_type(category)
    return {
        "products": formatted_products
    }

def getProducts():
    formatted_products = []
    for product_details in get_products(): 
        product = {
            "product_id": int(product_details[0]), 
            "product_price": float(product_details[1]), 
            "name":product_details[2], 
            "sku": int(product_details[3]), 
            "category":product_details[4],
            "image_url":product_details[5]
        }

        formatted_products.append(product)
    return {
        "products":formatted_products
    }