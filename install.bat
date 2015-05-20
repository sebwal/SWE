@ECHO OFF

@ECHO Installation der NPM-Packages. Es gibt Warnings bzgl.:
@ECHO karma, fs-events, ws, browser-sync, node-gyp und gulp-imagemin
@ECHO.
@ECHO !!! Sobald die Warnings mit gulp-imagemin beginnen: !!!
@ECHO !!! abbrechen und nochmals "install" aufrufen       !!!
@ECHO.

@REM i: install
CALL npm i --cache-min 999999

@ECHO.
@ECHO Installation der Bower-Packages
@ECHO.

@REM -S: save
@REM -D: save dev
@REM -V: verbose
@REM -o: offline
CALL bower install -S -V -o
CALL bower install -D -V -o
