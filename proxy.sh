#!/bin/sh

# an der Hochschule muessen die Proxy-Einstellungen gesetzt sein

USERNAME=MeineBenutzerkennung
PASSWORD=MeinPasswort

# npm
npm c set registry http://registry.npmjs.org/
npm c set proxy http://$USERNAME:$PASSWORD@proxy.hs-karlsruhe.de:8888
npm c set https-proxy http://$USERNAME:$PASSWORD@proxy.hs-karlsruhe.de:8888

# bower
cp .bowerrc.proxy .bowerrc

# bower ruft beim Installieren von Packages auch Git auf:
git config --global http.proxy http://$USERNAME:$PASSWORD@proxy.hs-karlsruhe.de:8888
git config --global https.proxy http://$USERNAME:$PASSWORD@proxy.hs-karlsruhe.de:8888
git config --global url."http://".insteadOf git://
