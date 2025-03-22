import time
import board
import adafruit_dht
import json

DHT_PIN = board.D4
dht_sensor = adafruit_dht.DHT11(DHT_PIN)

def read_dht_sensor():
    while True:
        try:
            temperature = dht_sensor.temperature
            humidity = dht_sensor.humidity  
            if humidity is not None and temperature is not None:
                print(f"🌡️ Temperatura: {temperature:.1f}°C  💧 Wilgotność: {humidity:.1f}%")
                current_state = {
                    "temperature": temperature,
                    "humidity": humidity
                }
                with open("current_state.json", "w") as f:
                    json.dump(current_state, f, indent=4)
            else:
                print("⚠️ Błąd odczytu danych z czujnika. Spróbuj ponownie.")

        except RuntimeError as error:
            print(f"⚠️ Błąd odczytu: {error}")

        time.sleep(5)

# if __name__ == "__main__":
#     read_dht_sensor()
