#!/bin/bash

npm run prod
cp -r public/* /var/www/www.bridomeara.ie/public/
cp -r resources/views/* /var/www/www.bridomeara.ie/resources/views/