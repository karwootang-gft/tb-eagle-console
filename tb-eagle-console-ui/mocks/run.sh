#!/bin/bash
json-server -H 0.0.0.0 -p 80 index.js --routes routes.json --middlewares login.js 