from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
from flask import session           #facilitate flask sessions
import sqlite3   #enable control of an sqlite database
import csv

db = sqlite3.connect("chocolate.db", check_same_thread=False) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events


def create_tables():
    c = db.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS users(id INTEGER, modifier INTEGER)")
    c.execute("CREATE TABLE IF NOT EXISTS cart(user_id INTEGER, total_price TEXT, money_saved TEXT)")
    c.execute("CREATE TABLE IF NOT EXISTS cartcontent(id TEXT, card_id INTEGER, product_id TEXT, quantity INTEGER)")
    c.execute("CREATE TABLE IF NOT EXISTS products(id TEXT, price TEXT, name TEXT, sku TEXT, category TEXT, image_url TEXT, aisle TEXT)")
    db.commit()

def populate_tables():
    prod_data_csv = open('prodData.csv')
    contents = csv.reader(prod_data_csv)
    insert_records = "INSERT INTO products (id, price, name, sku, category, image_url, aisle) VALUES (?, ?, ?, ?, ?, ?, ?)"
    c.executemany(insert_records, contents)

def create_user(id, modifier):
    c = db.cursor()
    create_tables()
    c.execute("INSERT INTO users (id, modifier) VALUES (?, ?);", (id, modifier))
    c.execute("INSERT INTO cart (user_id, total_price, money_saved) VALUES (?, ?, ?);", (id, 0, 0))
    db.commit()

def get_cart(user_id):
    c = db.cursor()
    c.execute("SELECT * FROM cart WHERE user_id = ?;", (user_id,))
    cart_data = c.fetchone()
    return cart_data

def add_product_to_cart(user_id, product_id, quantity):
    c = db.cursor()
    
    c.execute("SELECT id, quantity FROM cartcontent WHERE card_id = ? AND product_id = ?;", (user_id, product_id))
    existing_product = c.fetchone()
    if existing_product:
        new_quantity = existing_product[1] + quantity
        c.execute("UPDATE cartcontent SET quantity = ? WHERE id = ?;", (new_quantity, existing_product[0]))
    else:
        c.execute("INSERT INTO cartcontent (card_id, product_id, quantity) VALUES (?, ?, ?);", (user_id, product_id, quantity))
    db.commit()

def remove_product_from_cart(user_id, product_id):
    c = db.cursor()
    c.execute("DELETE FROM cartcontent WHERE card_id = ? AND product_id = ?;", (user_id, product_id))
    db.commit()

def empty_cart(user_id):
    c = db.cursor()
    c.execute("DELETE FROM cartcontent WHERE card_id = ?;", (user_id,))
    db.commit()

def get_product_info(product_id):
    c = db.cursor()
    c.execute("SELECT * FROM products WHERE id = ?;", (product_id,))
    product_data = c.fetchone()
    return product_data

def calculate_cart_total(user_id):
    c = db.cursor()
    c.execute("SELECT SUM(p.price * cc.quantity) FROM products AS p JOIN cartcontent AS cc ON p.id = cc.product_id WHERE cc.card_id = ?;", (user_id,))
    total_price = c.fetchone()[0]
    return total_price if total_price else 0

def get_cart_contents(user_id):
    c = db.cursor()
    c.execute("SELECT p.*, cc.quantity FROM products AS p JOIN cartcontent AS cc ON p.id = cc.product_id WHERE cc.card_id = ?;", (user_id,))
    cart_contents = c.fetchall()
    return cart_contents

def get_products_of_type(type):
    c = db.cursor()
    c.execute("SELECT price, name, sku, image_url, aisle FROM products WHERE category = ?;", (type,))
    type_contents = c.fetchall()
    return type_contents

def get_products():
    c = db.cursor()
    c.execute("SELECT * from products")
    products = c.fetchall()
    return products



create_tables()
populate_tables()

#test
select_all = "SELECT * FROM products"
rows = c.execute(select_all).fetchall()
for row in rows:
    print(row)