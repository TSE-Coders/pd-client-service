#!/bin/bash

VERSION=$(cat version)

/home/ubuntu/.asdf/bin/asdf install nodejs $VERSION
/home/ubuntu/.asdf/bin/asdf local nodejs $VERSION

/home/ubuntu/.asdf/shims/npm install
/home/ubuntu/.asdf/shims/npm run dev

