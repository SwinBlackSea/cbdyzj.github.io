# 升级Catalina踩坑记

昨天给MacBook Pro升级了Catalina，踩了一些坑如下

## Apple ID的一个问题

升级完之后，为了避免一些可能的历史文件、配置的问题，我尝试抹盘重装

备份好相关文件之后，进入系统，按`option` + `command` + `R`，使用磁盘管理工具抹掉磁盘。结果发现有一个磁盘抹不掉

提示的内容是：需要我输入Apple ID的密码以解除“查找我的Mac”功能，然而上面现实的Apple ID是一个谷歌邮箱——我曾经的Apple ID

打电话给客服请求帮助，客服给出的解决方法是，将我目前的Apple ID邮箱改回该谷歌邮箱，然后才能解除“查找我的Mac”功能。这应该是一个Apple ID的一个BUG吧😂

## 默认的shell变成了zsh

作为一个bash用户，一开始使用zsh还是有一些配置不习惯

在bash中，我的prompt是这样设置的`PS1='\u@\h:\w\n$ '`。我习惯设置prompt为两行，第一行是用户、主机及其当前目录等信息，然后另起一行用来输入命令

查好多资料，换行似乎不太好设置，不过最后还是圆满解决。现在的prompt设置如下

```
ZSH_PROMPT_NEWLINE=$'\n'
PS1="%n@%m:%~${ZSH_PROMPT_NEWLINE}$ "
```

至于oh-my-zsh，之后再研究吧

## Homebrew安装Java后无法运行

A solution, not sure if that's the only solution & the better one, is to run

```
sudo spctl --master-disable
```

Then run your app (validation will be kept by macOS Gatekeeper)

and right after that re-enable Gatekeeper with

```
sudo spctl --master-enable
```

This last step is important to keep you Mac safe :)
