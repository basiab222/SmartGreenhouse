import json
import requests
import importlib
import RPi.GPIO as GPIO
import time
import multiprocessing 
from IoT.components import heating, ventilation, water, dht11
import preset_setting

SERVER_URL = "http://localhost:8081/raspberry"

def get_preset_values():
    try:
        response = requests.get(SERVER_URL, timeout=5)
        if response.status_code == 200:
            data = response.json()
            return data.get("temperature"), data.get("humidity")
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
            response = requests.post(SERVER_URL+"/state", json=data, timeout=5)
            if response.status_code == 200:
                print(f"✅ Data sent: {data}")
            else:
                print(f"⚠️ Server error: {response.status_code}")
        preset_temperature, preset_humidity =  get_preset_values()
        
        if None in (preset_temperature, preset_humidity):
            print("⚠️ Error retrieving preset values. Skipping control check.")
            time.sleep(5)
            continue

        if temperature < preset_temperature:
            heating.turn_on()
        elif temperature > preset_temperature:
            heating.turn_off()

        if humidity < preset_humidity:
            water.turn_on()
            time.sleep(5)
            water.turn_off()
            ventilation.turn_off()
        elif humidity > preset_humidity:
            ventilation.turn_on()
        time.sleep(5)

def start_flask_server():
    preset_setting.start_server()

if __name__ == "__main__":
    server_process = multiprocessing.Process(target=start_flask_server, daemon=True)
    server_process.start()
    control_environment()