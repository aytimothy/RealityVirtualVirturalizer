#!/bin/bash

# Kill everything!
screen -XS roscore quit
screen -XS rosswitch quit
screen -XS framewriter quit
screen -XS rosbridge quit
screen -XS urgnode quit
screen -XS videostream quit
screen -XS imureader quit
screen -XS webserver quit