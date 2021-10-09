#!/bin/bash

# Redirect stdout ( > ) into a named pipe ( >() ) running "tee"
BASE_DIR=~
LOG_DIR=${HOME}/log
makdir -p ${LOG_DIR}
exec > >(tee -ia ${LOG_DIR}/init-trail.log)
exec 2>&1

echo "Starting the init script execution"
date
# Standard git pull
echo "Standard git pull"
echo "My working directory is ${BASE_DIR}"
cd ${BASE_DIR}
git clone https://github.com/gireesh971/peacock.git
cd peacock
git pull

docker build -it peacock .

docker -d docker run -d -it -p 80:80 peacock
echo "Completed the init script execution"
date
