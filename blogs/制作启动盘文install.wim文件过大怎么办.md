# 制作启动盘文install.wim文件过大怎么办

可以使用这条命令解决

```
dism /Split-Image /ImageFile:C:\sources\install.wim /SWMFile:D:\sources\install.swm /FileSize:4096
```
