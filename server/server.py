# -*- coding: utf-8 -*-
from flask import Flask, jsonify


app = Flask(__name__)
app.debug = True


if __name__ == '__main__':
    app.run()
