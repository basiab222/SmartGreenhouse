import json
import requests
import importlib
import RPi.GPIO as GPIO
import time
import multiprocessing 
from IoT.components import heating, ventilation, water, dht11
import preset_setting

SERVER_URL = "http://localhost:5000/get_data"  # Flask URL

def get_preset_values():
    try:
        response = requests.get(SERVER_URL, timeout=5)
        if response.status_code == 200:
            data = response.json()
            return data.get("min_temperature"), data.get("max_temperature"), data.get("min_humidity"), data.get("max_humidity")
        else:
            print(f"⚠️ Server error: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"⚠️ Connection error: {e}")
    
    return None, None, None, None

def control_environment():
    while True:
        dht11.read_dht_sensor()
        with open("current_state.json", "r") as f:
            data = json.load(f)
            temperature = data["temperature"]
            humidity = data["humidity"]
            response = requests.post(SERVER_URL, json=data, timeout=5)
            if response.status_code == 200:
                print(f"✅ Data sent: {data}")
            else:
                print(f"⚠️ Server error: {response.status_code}")
        min_temperature, max_temperature, min_humidity, max_humidity = get_preset_values()
        
        if None in (min_temperature, max_temperature, min_humidity, max_humidity):
            print("⚠️ Error retrieving preset values. Skipping control check.")
            time.sleep(5)
            continue

        if temperature < min_temperature:
            heating.turn_on()
        elif temperature > max_temperature:
            heating.turn_off()

        if humidity < min_humidity:
            water.turn_on()
            time.sleep(5)
            water.turn_off()
        elif humidity > max_humidity:
            ventilation.turn_on()
        elif humidity < ((max_humidity + min_humidity) / 2):
            ventilation.turn_off()

        time.sleep(5)

def start_flask_server():
    preset_setting.start_server()

if __name__ == "__main__":
    server_process = multiprocessing.Process(target=start_flask_server, daemon=True)
    server_process.start()
    control_environment()