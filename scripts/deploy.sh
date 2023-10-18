#!/bin/bash

npm run production
sudo cp -r * /var/www/bridomeara.ie/
cd /var/www/bridomeara.ie/ && sudo php artisan cache:clear && cd -