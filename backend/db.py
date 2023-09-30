from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
from flask import session           #facilitate flask sessions
import sqlite3   #enable control of an sqlite database

db = sqlite3.connect("chocolate.db", check_same_thread=False) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events


def create_tables():
    c = db.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS users(id INTEGER, modifier INTEGER)")
    c.execute("CREATE TABLE IF NOT EXISTS cart(id INTEGER, user_id INTEGER, total_price TEXT, money_saved TEXT)")
    c.execute("CREATE TABLE IF NOT EXISTS cartcontent(id INTEGER, card_id INTEGER, product_id TEXT, quantity INTEGER)")
    c.execute("CREATE TABLE IF NOT EXISTS products(id INTEGER, price TEXT, name TEXT, sku TEXT, category TEXT, image_url TEXT)")
    db.commit()

def create_user(id, modifier):
    c = db.cursor()
    create_tables()
    c.execute(f'INSERT INTO users (id, modifier) VALUES (?, ?);', (id, modifier))
    c.execute(f'INSERT INTO cart (id, user_id, total_price, money_saved) VALUES (?, ?, ?, ?);', (id, id, 0, 0))
    db.commit()