from flask import Flask
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
def addToCart():
    pass

@app.route("/cart/subtract", methods=["PUT"])
def subtractFromCart():
    pass

@app.route("/cart/delete", methods=["DELETE"])
def deleteFromCart(): 
    pass
