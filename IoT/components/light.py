from gpio_manager import setup_pin, turn_on as gpio_on, turn_off as gpio_off

LIGHT_PIN = 27

setup_pin(LIGHT_PIN)

def turn_on():
    gpio_on(LIGHT_PIN)

def turn_off():
    gpio_off(LIGHT_PIN)