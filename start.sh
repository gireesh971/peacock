#!/bin/bash
docker run -it --rm -p 80:4200 --volume $(pwd):/app node:14.17.0-alpine sh /app/scripts/ng-serve.sh
