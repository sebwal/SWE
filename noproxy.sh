#!/bin/sh

# zuhause muss die Proxy-Einstellungen entfernt werden

# npm
npm c delete proxy
npm c delete https-proxy

# bower ruft beim Installieren von Packages auch Git auf
git config --global --unset http.proxy
git config --global --unset https.proxy
git config --global --unset url."http://".insteadOf

# bower
cp .bowerrc.noproxy .bowerrc
