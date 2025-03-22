from flask import Flask, request, jsonify

app = Flask(__name__)

preset = {"temperature": None, "humidity": None}

@app.route("/setting", methods=["POST"])
def update_data():
    global preset
    data = request.get_json()
    if data:
        preset = data  
        print(f"📥 Preset: {preset}")
        return jsonify({"status": "success", "message": "Data received"}), 200
    return jsonify({"status": "error", "message": "No JSON received"}), 400

def start_server():
    app.run(host="0.0.0.0", port=8081)