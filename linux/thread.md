# 线程模型

三种可能的线程模型

- M:1：M个用户线程映射为1个内核线程。
- 1:1：1个用户线程映射为1个内核线程（一一映射）。
- M:N：M个用户线程映射为N内核线程。

## 常见案例

### Node.js Generator

M:1

### Java

JVM规范里没有规定的。

Java SE最常用的JVM是Oracle/Sun研发的HotSpot VM。在这个JVM的较新版本（[自Java 1.3起](https://stackoverflow.com/questions/5713142/green-threads-vs-non-green-threads)）所支持的所有平台上，它都是使用1:1线程模型的——除了Solaris之外，它是个特例。

### POSIX线程

> NPTL(Native  POSIX Threading Library)

1:1

### Golang goroutine

M:N