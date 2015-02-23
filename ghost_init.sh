#!/bin/bash

if [ ! -d /app/state/ghost ]; then
    mkdir -p /app/state/ghost
    if [ -d /app/code/js-init-state ]; then
        cp -r /app/code/js-init-state/* /app/state/ghost/
    else
        cp -r /app/code/src/content /app/state/ghost/
        mkdir /app/state/ghost/db
    fi
fi
