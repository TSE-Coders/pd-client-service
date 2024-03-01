#!/bin/bash

VERSION=$(cat version)

asdf install nodejs $VERSION
asdf local nodejs $VERSION

npm install
npm run dev

