# 实战Java高并发程序设计

### 并发级别

- 阻塞（Blocking）：资源锁
- 无饥饿（Starvation-Free）：公平锁
- 无障碍（Obstruction-Free）：乐观认为不会冲突，失败回滚
- 无锁（Lock-Free）：重复尝试
- 无等待（Wait-Free）：

### 两个定律

- Amdahl定律
- Gustafson定律

### Java内存模型（JMM）

- 原子性（Atomicity）：原子操作
- 可见性（Visibility）：
- 有序性（Ordering）
- 指令重排的Happen-Before规则
  - 程序顺序原则：线程内语义串行
  - volatile原则：volatile变量的写，先发生于读
  - 锁规则：解锁（unlock）先于加锁（lock）
  - 传递性：A先于B，B先于C，则A先于C
  - 线程的start()先于它的每个动作
  - 线程的所有操作先于线程的终结（Thread.join()）
  - 线程的中断（interrupt()）先于被中断的代码
  - 对象的构造函数执行、结束先于finalize()方法（finalize()，Java9开始废弃）

### 线程

- 线程状态

```Java
public enum State {
    NEW,
    RUNNABLE,
    BLOCKED,
    WAITING,
    TIMED_WAITING,
    TERMINATED;
}
```

- NEW：创建未执行
- RUNNABLE：执行
- BLOCKED：阻塞
- WAITING：无时间限制等待
- TIMED_WAITING：有时间限制等待
- TERMINATED：终结

#### 相关方法

- start()：启动线程
- stop()：暴力终止（Java1.2开始废弃）
- interrupt()：中断线程
- isInterrupted()：
  - 方法：检查是否中断
  - 静态方法：检查是否中断，并清除中断状态
- InterruptedException：sleep()、wait()、join()可能发生，中断异常后会清除中断标记
- 等待（wait）和通知（notify）：调用时需要在获取当前对象的监视器
  - wait()：将当前对象加入当前对象的等待队列，释放当前对象锁，阻塞当前线程
  - notify()：随机唤醒当前对象等待队列中的一个线程
  - notifyAll()：唤醒当前对象等待队列中的所有线程
- 挂起（suspend()）和继续执行（resume()）
  - 1.2起已废弃
- 等待线程结束（join）和谦让（yeild）
  - join()：本质是让调用线程wait()在当前线程实例上
  - yeild()：让出CPU

#### volatile

- 可见性
- 有序性
- 不能替代锁，无法保证符合操作原子性

### 线程组

- ​