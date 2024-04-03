from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__)

users = []


def sign_up(username, password, email):
    global users
    new_user = {
        "username": username,
        "password": password,
        "email": email
    }
    users.append(new_user)
    save_users()


# Helper Functions
def save_users():
    with open("users.json", "w") as file:
        json.dump(users, file)





if __name__ == "__main__":
    app.run(debug=True)