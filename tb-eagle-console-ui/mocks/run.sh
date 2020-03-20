#!/bin/bash
json-server -H 0.0.0.0 -p 80 mocks/index.js --routes mocks/routes.json --middlewares ./mocks/login.js 