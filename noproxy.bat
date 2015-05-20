@ECHO OFF

@REM zuhause kein Proxy gesetzt sein

@REM npm
CALL npm c delete proxy
CALL npm c delete https-proxy

@REM bower
COPY .bowerrc.noproxy .bowerrc

@REM bower ruft beim Installieren von Packages auch Git auf
git config --global --unset http.proxy
git config --global --unset https.proxy
git config --global --unset url."http://".insteadOf
