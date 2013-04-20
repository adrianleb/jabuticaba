#!/bin/bash

coffee --output public/js/ --watch --compile coffee/ &
compass watch --sass-dir scss/ --css-dir public/css/ --output-style compressed --debug-info --trace &
./resource-json-compiler.js &
./eco-compiler.js &
cd public
ponyhost server
