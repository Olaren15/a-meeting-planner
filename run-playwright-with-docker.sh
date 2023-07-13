#! /bin/bash

docker run -it --rm --user "$(id -u)":"$(id -g)" --ipc=host --workdir=/my_tests -v "$PWD":/my_tests mcr.microsoft.com/playwright:v1.36.0-jammy npm run test:e2e
