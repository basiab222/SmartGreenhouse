import requests

LIGHT_CONTROLLER = 'http://localhost:3306/terrarium_database/lights'

try:
    response = requests.post(LIGHT_CONTROLLER)
    if response.status_code == 200:
        print("Sprawdzanie naświetlenia...")
    else:
        print(f'Błąd podczas wysyłania danych: {response.status_code}')
except Exception as e:
    print(f'Błąd: {e}')
