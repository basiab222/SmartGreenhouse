import json
import importlib
import RPi.GPIO as GPIO

def execute_action(command_json):
    data = json.loads(command_json)
    component = data.get("component")
    action = data.get("action")

    try:
        module = importlib.import_module(f"components.{component}")
        
        if action == "on":
            module.turn_on()
        elif action == "off":
            module.turn_off()
        else:
            print(f"Unknown action: {action}")
    except ModuleNotFoundError:
        print(f"Component '{component}' not found.")
    except AttributeError:
        print(f"Action method missing in {component} module.")

if __name__ == "__main__":
    json_input = '{"component": "heating", "action": "on"}'
    execute_action(json_input)

    #### Mechanics: 1. get json with current temperature, humidity
    #### 2. compare with values inside current preset variables (temp, hum)
    #### 3. if they differ, turn device on or off