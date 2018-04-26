- DNS

```shell
$ vi /etc/resolv.conf
```

- Time

```shell
$ crontab -e
00 10 * * * /usr/sbin/ntpdate -u cn.pool.ntp.org > /dev/null 2>&1; /sbin/hwclock -w
```

- User

```shell
$ useradd -m -g users -s /bin/bash cbdyzj
$ usermod -aG wheel cbdyzj
```

- Message of today

```shell
$ vi /etc/motd
```

