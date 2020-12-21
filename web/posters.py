import csv
import urllib.request
from bs4 import BeautifulSoup

row_names = ['imdb_title_id', 'title']
with open('movies.csv', 'r', newline='') as in_csv:
    reader = csv.DictReader(in_csv, fieldnames=row_names, delimiter=',')
    count = 0
    for row in reader:
        if count < 23000:
            count += 1
        else:
            movie_id = row['imdb_title_id']
            domain = 'http://www.imdb.com'
            movie_url = domain + '/title/' + movie_id +'/'
            with urllib.request.urlopen(movie_url) as response:
                html = response.read()
                soup = BeautifulSoup(html, 'html.parser')
                # Get url of poster image
                try:
                    image_url = soup.find('div', class_='poster').a.img['src']
                    # TODO: Replace hardcoded extension with extension from string itself
                    extension = '.jpg'
                    image_url = ''.join(image_url.partition('_')[0]) + extension
                    filename = 'img/' + movie_id + extension
                    with urllib.request.urlopen(image_url) as response:
                        #with open(filename, 'wb') as out_image:
                         #   out_image.write(response.read())
                        with open('movie_poster.csv', 'a', newline='') as out_csv:
                            writer = csv.writer(out_csv, delimiter=',')
                            writer.writerow([movie_id, image_url])
                # Ignore cases where no poster image is present
                except AttributeError:
                    pass