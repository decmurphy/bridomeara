#!/bin/bash

npm run production
cp -r public/* /var/www/www.bridomeara.ie/public/
cp -r scripts/* /var/www/www.bridomeara.ie/scripts/
cp -r resources/views/* /var/www/www.bridomeara.ie/resources/views/
cp -r resources/css/* /var/www/www.bridomeara.ie/resources/css/