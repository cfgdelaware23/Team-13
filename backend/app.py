from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
from flask import session           #facilitate flask sessions
import sqlite3   #enable control of an sqlite database

db = sqlite3.connect("chocolate.db", check_same_thread=False) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events


c.execute("CREATE TABLE IF NOT EXISTS users(username TEXT)")
c.execute("CREATE TABLE IF NOT EXISTS products(name TEXT)")
db.commit()
