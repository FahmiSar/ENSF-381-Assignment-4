from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Helper Functions
def load_users():
    global users
    try:
        with open("users.json", 'r') as file:
            users = json.load(file)
    except FileNotFoundError:
        users = []

def save_users():
    with open("users.json", "w") as file:
        json.dump(users, file)


# load uses.json file 
load_users()

@app.route("/signup", methods=["POST"])
def sign_up():
    global users
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    email = data.get("email")

    # Check to ensure the fields aren't empty
    if not username or not password or not email:
        return jsonify({"error": "Username, password, and email are required"}), 400
    
    # check to ensure username doesn't already exist
    if any(user["username"] == username for user in users):
        return jsonify({"error": "Username already exists"}), 400
    
    new_user = {
        "username": username,
        "password": password,
        "email": email
    }

    users.append(new_user)
    save_users()
    return jsonify({"message": "User created successfully"}), 201

@app.route("/login", methods=["POST"])
def login():
    global users
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Check to ensure the fields aren't empty
    if not username or not password:
        return jsonify({"error": "Username, password, and email are required"}), 400
    
    matched_users = [user for user in users if user["username"] == username]

    if not matched_users:
        return jsonify({"error": "User not found"}), 404

    # this assumes that usernames are unique 
    matched_user = matched_users[0]
    if matched_user["password"] != password:
        return jsonify({"error": "Incorrect password"}), 401
    
    return jsonify({"message": "Login successful"}), 200


if __name__ == "__main__":
    app.run(debug=True)