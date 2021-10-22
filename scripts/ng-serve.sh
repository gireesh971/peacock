#!/bin/bash

# Redirect stdout ( > ) into a named pipe ( >() ) running "tee"
BASE_DIR=/app
cd ${BASE_DIR}
NG_CLI_ANALYTICS=false npm install
NG_CLI_ANALYTICS=false npm install -g @angular/cli
ng serve --host 0.0.0.0
