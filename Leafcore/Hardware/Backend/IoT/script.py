import RPi.GPIO as GPIO
import time

PIN = 27

GPIO.setmode(GPIO.BCM)
GPIO.setup(PIN, GPIO.OUT)

try:

    print("Turning GPIO 27 ON")
    GPIO.output(PIN, GPIO.HIGH)
    time.sleep(2)

    print("Turning GPIO 27 OFF")
    GPIO.output(PIN, GPIO.LOW)
    time.sleep(2)

except KeyboardInterrupt:
    print("Script interrupted.")

finally:
    GPIO.cleanup()
    print("GPIO cleaned up.")
