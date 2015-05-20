@ECHO OFF

@REM an der Hochschule muessen die Proxy-Einstellungen gesetzt sein

SETLOCAL

SET USERNAME=MeineBenutzerkennung
SET PASSWORD=MeinPasswort

@REM npm
CALL npm c set registry http://registry.npmjs.org/
CALL npm c set proxy http://%USERNAME%:%PASSWORD%@proxy.hs-karlsruhe.de:8888
CALL npm c set https-proxy http://%USERNAME%:%PASSWORD%@proxy.hs-karlsruhe.de:8888

@REM bower
COPY .bowerrc.proxy .bowerrc

@REM bower ruft beim Installieren von Packages auch Git auf
git config --global http.proxy http://%USERNAME%:%PASSWORD%@proxy.hs-karlsruhe.de:8888
git config --global https.proxy http://%USERNAME%:%PASSWORD%@proxy.hs-karlsruhe.de:8888
git config --global url."http://".insteadOf git://

ENDLOCAL
