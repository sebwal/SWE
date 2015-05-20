#!/bin/sh

echo  Installation der NPM-Packages
# i: install
npm i --cache-min 999999

echo Installation der Bower-Packages
# -S: save
# -D: save dev
# -V: verbose
# -o: offline
bower install -S -V -o
bower install -D -V -o
