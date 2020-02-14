#!/bin/bash

base="src/config/"

mkdir -p $base

url=$ENV_URL

[[ ! -f "src/config/index.js" ]] && curl -s -L $url > "${base}index.js"

npm install
npm run build