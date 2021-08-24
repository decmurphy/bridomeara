#!/bin/bash

npm run production
sudo cp -r * /var/www/www.bridomeara.ie/
cd /var/www/www.bridomeara.ie/ && sudo php artisan cache:clear && cd -