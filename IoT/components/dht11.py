import time
import board
import adafruit_dht

DHT_PIN = board.D4


dht_sensor = adafruit_dht.DHT11(DHT_PIN)

def read_dht_sensor():
    while True:
        try:
            if humidity is not None and temperature is not None:
                print(f"🌡️ Temperatura: {temperature:.1f}°C  💧 Wilgotność: {humidity:.1f}%")
            else:
                print("⚠️ Błąd odczytu danych z czujnika. Spróbuj ponownie.")

        except RuntimeError as error:
            print(f"⚠️ Błąd odczytu: {error}")

        time.sleep(2)

if __name__ == "__main__":
    read_dht_sensor()
