from kivy.app import App
from kivy.lang import Builder
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.config import Config

# Set window size
Config.set('graphics', 'width', '1024')
Config.set('graphics', 'height', '768')

class HomeScreen(Screen):
    pass

class EditScreen(Screen):
    pass

class TerrariumApp(App):
    def build(self):
        return Builder.load_file("main.kv")

if __name__ == '__main__':
    TerrariumApp().run()
