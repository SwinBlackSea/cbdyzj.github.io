# Docker

- Docker相关整理
- 统一使用一个桥接网络

```sh
docker network create docker-network
```

## MacOS

- 如果使用Docker for Mac，可以通过下面的tty访问Linux虚拟机

```
~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty
```

## Linux

免root使用Docker

```sh
sudo usermod -aG docker $USER
```

安装

```
https://docs.docker.com/install/linux/docker-ce/centos
https://docs.docker.com/compose/install
https://download.docker.com/linux/centos/7/x86_64/stable/Packages
```

## Usage

### Remove dangling images

```
docker rmi $(docker images -qf dangling=true)
```
