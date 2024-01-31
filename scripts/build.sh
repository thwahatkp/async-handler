#!/bin/bash
rm -rf ../build
npx tsc --project tsconfig-cjs.json
npx tsc --project tsconfig-es.json