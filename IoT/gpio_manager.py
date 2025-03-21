import RPi.GPIO as GPIO
import atexit

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

atexit.register(GPIO.cleanup)

def setup_pin(pin_number):
    GPIO.setup(pin_number, GPIO.OUT)

def turn_on(pin_number):
    GPIO.output(pin_number, GPIO.HIGH)

def turn_off(pin_number):
    GPIO.output(pin_number, GPIO.LOW)