import RPi.GPIO as GPIO
import sys

pins = {
'HUMIDIFIER': 17,
'LIGHT': 27,
'VENTILATOR': 22,
'WATER_SOURCE': 23,
'HEATING': 24
}

GPIO.setmode(GPIO.BCM)

def turn_on(device):
    print(f"Włączam {device}...")
    GPIO.output(pins[device], GPIO.HIGH)

def turn_off(device):
    print(f"Wyłączam {device}...")
    GPIO.output(pins[device], GPIO.LOW)

def main():
    if len(sys.argv) != 3:
        sys.exit(1)
    try:
        print("wchodzi")
        device_name = sys.argv[1]
        device_mode = sys.argv[2]
        if device_name == 27:
            GPIO.input(27)
            print("wchodzi")
            if device_mode == "on":
                GPIO.input(27)
                turn_on(device_name)
            elif device_mode == "off":
                turn_off(device_name)
            elif device_mode == "null":
                print("Null.")
            else:
                print("Nieprawidłowa komenda.")
                sys.exit(1)
        else:
            print("Nieprawidłowa nazwa urządzenia.")
            sys.exit(1)
    finally:
        GPIO.cleanup()
        sys.exit(0)
