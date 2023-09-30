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
    c.execute("CREATE TABLE IF NOT EXISTS users(id TEXT, modifier REAL)")
    c.execute("CREATE TABLE IF NOT EXISTS cart(user_id INTEGER, total_price TEXT, money_saved TEXT)")
    c.execute("CREATE TABLE IF NOT EXISTS cartcontent(id TEXT, card_id INTEGER, product_id TEXT, quantity INTEGER)")
    c.execute("CREATE TABLE IF NOT EXISTS products(id TEXT, price TEXT, name TEXT, sku TEXT, category TEXT, image_url TEXT, aisle TEXT)")
    db.commit() 

def populate_tables():
    prod_data_csv = open('prodData.csv', encoding='utf-8-sig')
    prod_content = csv.reader(prod_data_csv)
    insert_prod_records = "INSERT INTO products (id, price, name, sku, category, image_url, aisle) VALUES (?, ?, ?, ?, ?, ?, ?)"
    c.executemany(insert_prod_records, prod_content)

def create_user(id, modifier):
    c = db.cursor()
    create_tables()
    c.execute("INSERT INTO users (id, modifier) VALUES (?, ?);", (id, modifier))
    c.execute("INSERT INTO cart (user_id, total_price, money_saved) VALUES (?, ?, ?);", (id, 0, 0))
    db.commit()

def get_cart(user_id):
    """
    Returns a list of (product id, quantity) for each product in a customer's cart
    Also returns total price and money saved
    """
    c = db.cursor()
    c.execute("SELECT * FROM cart WHERE user_id = ?;", (user_id,))
    cart_metadata = c.fetchone()
    c.execute("SELECT product_id, quantity FROM cartcontent WHERE card_id = ?;", (user_id,))
    cart_products = c.fetchall()
    
    return cart_metadata, cart_products

def add_product_to_cart(user_id, product_id, quantity):

    c = db.cursor()
    
    c.execute("SELECT id, quantity FROM cartcontent WHERE card_id = ? AND product_id = ?;", (user_id, product_id))
    existing_product = c.fetchone()

    c.execute("SELECT price FROM products WHERE id = ?;", (product_id))
    product_price = c.fetchone()

    c.execute("SELECT modifier FROM users WHERE id = ?;", [user_id])
    modified_product_price  = c.fetchone()[0] * float(product_price[0])
   
    if existing_product:
        new_quantity = existing_product[1] + quantity
        c.execute("UPDATE cartcontent SET quantity =" + str(new_quantity)+ " WHERE card_id = ? and product_id = ?;", (user_id, product_id))
    else:
        c.execute("INSERT INTO cartcontent (card_id, product_id, quantity) VALUES (?, ?, ?);", (user_id, product_id, quantity))
    

    c.execute("SELECT total_price, money_saved FROM cart WHERE user_id = ?;", (user_id,))
    curr_totals = c.fetchall()
    c.execute("UPDATE cart SET total_price = ? WHERE user_id = ?;", (round(float(curr_totals[0][0]), 3)+modified_product_price, user_id))
    c.execute("UPDATE cart SET money_saved = ? WHERE user_id = ?;", (round(float(curr_totals[0][1]), 3)+round(float(product_price[0]), 3), user_id))

    db.commit()

def remove_product_from_cart(user_id, product_id):
    c = db.cursor()
    #check if there are multiple of product
    c.execute("SELECT id, quantity FROM cartcontent WHERE quantity > 1 AND card_id = ? AND product_id = ?;", (user_id, product_id))
    multiple = c.fetchone()

    if multiple:
        new_quantity = multiple[1] - 1
        c.execute("UPDATE cartcontent SET quantity =" + str(new_quantity)+ " WHERE card_id = ? and product_id = ?;", (user_id, product_id))
    else:
        c.execute("DELETE FROM cartcontent WHERE card_id = ? AND product_id = ?;", (user_id, product_id))

    c.execute("SELECT price FROM products where id = ?;", (product_id,))
    product_price = c.fetchone()

    c.execute("SELECT modifier FROM users WHERE id = ?;", [user_id])
    modified_product_price  = round(c.fetchone()[0], 3) * round(float(product_price[0]), 3)

    c.execute("SELECT total_price, money_saved FROM cart WHERE user_id = ?;", (user_id,))
    curr_totals = c.fetchall()
    c.execute("UPDATE cart SET total_price = ? WHERE user_id = ?;", (round(float(curr_totals[0][0]), 3)-round(modified_product_price, 3), user_id))
    c.execute("UPDATE cart SET money_saved = ? WHERE user_id = ?;", (round(float(curr_totals[0][1]), 3)-round(float(product_price[0]), 3), user_id))
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

def add_product(product_id, product_price, product_name, product_sku, prod_category, prod_image, prod_aisle):
    c = db.cursor()
    c.execute("INSERT INTO products (id, price, name, sku, category, image_url, aisle) VALUES (?, ?, ?, ?, ?, ?, ?);", (product_id, product_price, product_name, product_sku, prod_category, prod_image, prod_aisle))
    db.commit()

    
"""
create_tables()
c.execute("DELETE FROM products")
c.execute("DELETE FROM users")
c.execute("DELETE FROM cart")
create_tables()
populate_tables()

for i in range(512376, 512382):
    create_user(i, 0.8)



create_tables()


c.execute("DELETE FROM products")
c.execute("DELETE FROM users")
c.execute("DELETE FROM cart")
c.execute("DELETE FROM cartcontent")

create_tables()
populate_tables()

for i in range(512376, 512382):
    create_user(i, 0.8)

#test population of products and users
select_prods = "SELECT * FROM products"
select_users = "SELECT * FROM users"
prod_rows = c.execute(select_prods).fetchall()
user_rows = c.execute(select_users).fetchall()
for user in user_rows:
    print(user)
for prod in prod_rows:
    print(prod)

add_product_to_cart("512380", '1', 1)
add_product_to_cart("512380", '1', 1)

print(get_cart("512380"))
remove_product_from_cart("512380", '1')
print(get_cart("512380"))
empty_cart("512380")
