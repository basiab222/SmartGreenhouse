import os
import random
import time
from icrawler.builtin import BingImageCrawler

dataset_path = 'Dataset'
num_images = 400

for plant in os.listdir(dataset_path):
    plant_path = os.path.join(dataset_path, plant)

    if os.path.isdir(plant_path):
        print(f"Pobieranie zdjęć dla rośliny: {plant}")

        google_crawler = BingImageCrawler(storage={'root_dir': plant_path},
                                            downloader_threads=3,)

        try:
            google_crawler.crawl(
                keyword=plant,
                max_num=num_images,
                file_idx_offset=0,
                filters=None
            )
        except Exception as e:
            print(f"Wystąpił błąd podczas pobierania zdjęć dla {plant}: {e}")

        print(f"Zakończono pobieranie zdjęć dla {plant}\n")

        time.sleep(random.uniform(3, 7))
