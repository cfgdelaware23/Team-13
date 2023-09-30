import json
import requests
from flask import Flask, request, jsonify
from products import getProductInfo, getProducts, getProductType

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

@app.route('/products', methods=['GET'])
def getProducts():
    response = requests.get('/products')
    products = getProducts().json
    return products)

@app.route('/products/<product_type>', methods=['GET'])
def getProductType(type):
    product = getProductType(type)
    if(product):
        return jsonify(product)
    else:
        return jsonify({'message': f'No products found for type: {type}'}), 404
    
@app.route('/products/<product_id>', methods=['GET'])
def getProductById(id):
    product = getProductInfo(id)
    if(product):
        return jsonify(product)
    else:
        return jsonify({'message': 'Product not found'}), 404

app.run(debug=True)   