#!/bin/bash

pwd=$(pwd)
base="${pwd}/src/config/"

# URL comes from env URL
url=$ENV_URL

mkdir -p $base

curl -s -L $url > "${base}index.js"
