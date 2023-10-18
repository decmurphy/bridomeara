#!/bin/bash

cd ~/git/bridomeara.ie/
git pull

cp -r /var/www/bridomeara.ie/content/* content/
cp -r /var/www/bridomeara.ie/public/assets/* public/assets/
cp -r /var/www/bridomeara.ie/resources/* resources/

git add .
git commit -m "Automated Content Backup"
git push