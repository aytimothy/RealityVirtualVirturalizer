# Troubleshooting

Here is a list of random problems that we faced while setting this thing up, and their solutions.

## Some screens/processes are dying!

Ensure you're running them in order. If in doubt, run each one-by-one and see what error message comes up. You can see the commands in `start.sh`.

## I can't run the webcam; it doesn't exist.

What probably happened is that `/dev/video0` is `sudo`ers-only. You can either:

* Take ownership `sudo chown [username] /dev/video0`, or
* Allow Read/Write permissions with `sudo chmod 666 /dev/video0`.

## I can't run/`rosrun` Python files!

If you're seeing something like this:

    Couldn't find executable named [program/file name] below [path/directory to file]
    Found the following, but they're either not files, or not executable:

Ensure that the following is at the top of the python file:

    #! /usr/bin/env python2
    
And also make sure it is executable:

    chmod 777 [path to file]

## I can't connect to the Hokuyo!

If you're seeing:

    Error connecting to Hokuyo: Could not open serial Hokuyo: /dev/ttyACM0 @ 115200
    Could not open serial device.
    
Ensure:

1. The Hokuyo is plugged into the power. It is not detectable if not powered.
2. The Hokuyo is connected via the USB port.
3. You haven't scrambled the Lidar's firware, and the USB is not broken.

## The webcam keeps dying!

To fix `image_view` from stopping, you need to:

**// todo: Investigate.**

SIGSEGV (segfault) in cvConvertImage(), definitely not perms issue, because it segfaults even with `sudo`.

## I can't run `rosbridge`!

If you see something like this:

    This does not support the vanilla version of `bson`. Please see [https://github.com/RobotWebTools/rosbridge_suite/issues/198](https://github.com/RobotWebTools/rosbridge_suite/issues/198) this issue for more information.
    
Or:

    ImportError: No module named bson
    
Run the following first:

    sudo pip uninstall bson /or/ sudo apt-get remove python-bson
    sudo pip install pymongo
