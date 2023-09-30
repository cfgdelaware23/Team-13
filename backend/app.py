import json
from flask import Flask, request, jsonify
from products import getProductInfo, getProducts, getProductCategory
from cart import addToCart, subtractFromCart, deleteFromCart, getCart 
from flask_cors import CORS
from flask import request
from db import get_user_modifier

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/cart", methods = ["POST"])
def getCartRoute():
    data = request.get_json()
    return getCart(data["user_id"])

@app.route("/cart/add", methods =["PUT"])
def addToCartRoute():
    data = request.get_json()
    if addToCart(data["user_id"], data["product_id"]):
        return {"message":"success"}
    else: 
        {"message":"failure"}

@app.route("/cart/subtract", methods=["PUT"])
def subtractFromCartRoute():
    data = request.get_json()
    user_id = data["user_id"]
    product_id = data["product_id"]
    subtractFromCart(user_id, product_id)
    return {'message': 'Removed an item successfully'}

@app.route("/cart/delete", methods=["DELETE"])
def deleteFromCartRoute(): 
    data = request.get_json()
    deleteFromCart(data["user_id"])
    return {'message': 'Emptied cart successfully'}


# Product routes

@app.route('/products', methods=['GET'])
def getProductsRoute():
    products = jsonify(getProducts())
    return products

@app.route('/products/<category>', methods=['GET'])
def getProductCategoryRoute(category):
    product = getProductCategory(category)
    if(product):
        return product
    else:
        return jsonify({'message': f'No products found for type: {category}'}), 404
    
@app.route('/products/<int:product_id>', methods=['GET'])
def getProductByIdRoute(product_id):
    product = getProductInfo(product_id)
    if(product):
        return jsonify(product)
    else:
        return jsonify({'message': 'Product not found'}), 404


@app.route("/user/modifier", methods=["POST"])
def getUserModifierRoute():
    data = request.get_json()
    user_modifier = get_user_modifier(float(data["user_id"]))
    return {
        "user_modifier":user_modifier
    }
    


if __name__ == "__main__":
    app.debug==True
    app.run(debug=True)   

