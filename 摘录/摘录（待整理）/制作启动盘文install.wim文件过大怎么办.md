制作启动盘`install.wim`文件过大可以使用这条命令解决

```powershell
dism /Split-Image /ImageFile:C:\sources\install.wim /SWMFile:D:\sources\install.swm /FileSize:4096
```

其中，`C:\sources\install.wim`为需要复制到启动盘的文件，`D:`为启动盘

