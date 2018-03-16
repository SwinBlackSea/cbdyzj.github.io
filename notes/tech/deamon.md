## Deamon

### Shell script

- `start`

```sh
#!/bin/sh
java -jar main.jar $@
```

- `stop`

```sh
#!/bin/sh
pid=`ps -ef | grep main.jar | grep -v grep | awk '{print $2}'`
if [ -n "$pid" ]
then
   echo "kill -9 的pid:" $pid
   kill -9 $pid
fi
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

