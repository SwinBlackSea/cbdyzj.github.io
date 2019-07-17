## 系统

- Linux LVM

### 格式化

```sh
mkfs.ext4 ${device}
```

### 挂载

```
/dev/sdb1 /storage ext4 defaults 0 0
```

挂载

```sh
mount -a
```

## 工具

```sh
gdisk
fdisk
cfdisk
sfdisk
parted
```
