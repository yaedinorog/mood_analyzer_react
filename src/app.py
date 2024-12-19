import os
import hmac
import hashlib
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Telegram Bot Token (Set this in your environment variables)
TELEGRAM_BOT_TOKEN = "7736655264:AAHiSxl1JZ5Ngf2VHub4XT3O09YRKZm8TEg"
SECRET_KEY = hashlib.sha256(TELEGRAM_BOT_TOKEN.encode()).digest()

# Telegram API URL
TELEGRAM_API_URL = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}"

@app.route('/auth/telegram', methods=['POST'])
def telegram_auth():
    # Retrieve data from the request
    data = request.json

    # Telegram authentication data
    hash = data.get('hash')
    user_data = {key: value for key, value in data.items() if key != 'hash'}

    # Create a string with all parameters
    check_string = "\n".join(f"{key}={value}" for key, value in sorted(user_data.items()))

    # Calculate HMAC hash to verify the data
    calculated_hash = hmac.new(SECRET_KEY, check_string.encode(), hashlib.sha256).hexdigest()

    # Check if the hash matches
    if hash != calculated_hash:
        return jsonify({"error": "Invalid hash"}), 401

    # If the hash is valid, return the user data
    return jsonify({"success": True, "data": user_data}), 200

@app.route('/')
def hello_worl():
    return jsonify({'success' : 'Hello, world'})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
