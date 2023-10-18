#!/bin/bash

cd ~/git/bridomeara/
git pull

cp -r /var/www/bridomeara.ie/content/* ~/git/bridomeara/content/
cp -r /var/www/bridomeara.ie/public/assets/* ~/git/bridomeara/public/assets/
cp -r /var/www/bridomeara.ie/resources/* ~/git/bridomeara/resources/

git add .
git commit -m "Automated Content Backup"
git push
