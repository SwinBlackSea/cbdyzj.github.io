## Deamon

### Shell script

```sh
nohup ./main >/dev/null 2>&1 &
```

### Systemd

- `main.service`

```ini
[Unit]
Description=Main service
                                                                                                                    
[Service]
Type=forking
PIDFile=/var/run/main.id
ExecStart=main
StandardOutput=syslog
StandardError=inherit

[Install]
WantedBy=multi-user.target
```
