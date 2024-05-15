from flask import Flask, jsonify,
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def ping_server():
    return "Welcome to the world of animals."

@app.route('https://5000-elshahatkha-angulardock-zlk5kex95gn.ws-eu111.gitpod.io/simple_json')
def simple_json():
    return jsonify('{saluto:ciao}')

if __name__=='__main__':
    app.run(host="0.0.0.0", port=5000)