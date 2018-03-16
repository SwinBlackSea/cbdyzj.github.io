## Deamon

### Shell script

```sh
nohup ./start >/dev/null 2>&1 &
```

- `start`

```sh
#!/bin/sh
java -jar main.jar $@
```

- `stop`

```sh
#!/bin/sh

function kill_process() {
    pid=`ps -ef | grep $1 | grep -v grep | awk '{print $2}'`
    if [ -n "$pid" ]
    then
       echo "kill 的pid:" $pid
       kill $pid
    fi
}

kill_process 'main.jar'
```

- `restart`

```sh
#!/bin/sh
./stop
./start
```

### Systemd

- `main.service`

```ini
[Unit]
Description=Main service
                                                                                                                    
[Service]
Type=forking
PIDFile=/var/run/main.id
ExecStart=java -jar main.jar
StandardOutput=syslog
StandardError=inherit

[Install]
WantedBy=multi-user.target
```

