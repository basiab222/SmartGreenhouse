from gpio_manager import setup_pin, turn_on as gpio_on, turn_off as gpio_off

HEATING_PIN = 24

setup_pin(HEATING_PIN)

def turn_on():
    gpio_on(HEATING_PIN)

def turn_off():
    gpio_off(HEATING_PIN)