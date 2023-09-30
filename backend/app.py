import json
from flask import Flask, request, jsonify
from products import getProductInfo, getProducts, getProductCategory

from cart import getCart
from flask import request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/cart", methods = ["GET"])
def getCartRoute():
    data = request.get_json()
    return getCart(data)

@app.route("/cart/add", methods =["PUT"])
def addToCartRoute():
    pass

@app.route("/cart/subtract", methods=["PUT"])
def subtractFromCartRoute():
    pass

@app.route("/cart/delete", methods=["DELETE"])
def deleteFromCartRoute(): 
    pass

# Product routes

@app.route('/products', methods=['GET'])
def getProductsRoute():
    products = jsonify(getProducts())
    return products

@app.route('/products/<category>', methods=['GET'])
def getProductCategoryRoute(category):
    product = getProductCategory(category)
    if(product):
        return jsonify(product)
    else:
        return jsonify({'message': f'No products found for type: {category}'}), 404
    
@app.route('/products/<int:product_id>', methods=['GET'])
def getProductByIdRoute(product_id):
    product = getProductInfo(product_id)
    if(product):
        return jsonify(product)
    else:
        return jsonify({'message': 'Product not found'}), 404

if __name__ == "__main__":
    app.run()   

