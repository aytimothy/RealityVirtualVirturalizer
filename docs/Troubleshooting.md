# Troubleshooting

Here is a list of random problems that we faced while setting this thing up, and their solutions.

## I can't run the webcam; it doesn't exist.

What probably happened is that `/dev/video0` is `sudo`ers-only. You can either:

* Take ownership `sudo chown [username] /dev/video0`, or
* Allow Read/Write permissions with `sudo chmod 666 /dev/video0`.

## I can't run/`rosrun` Python files!

Ensure that the following is at the top of the python file:

    #! /usr/bin/env python2
    
And also make sure it is executable:

    chmod 777 [path to file]
