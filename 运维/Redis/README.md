# Redis

## 常用数据结构

- 映射：set/get
- 散列表: hset/hget
- 列表: lpush/lpop/rpush/rpop
- 集合：sadd/srem
- 有序集合：zadd/zrem
- HyperLogLog：pfadd/pfcount

## 工具集

- 订阅发布模型：publish/subscribe
- 时间：获取时间戳和毫秒数

## 持久化

- RDB：类似快照
- AOF：写日志，恢复时重放AOF

## 复制

- 复制功能不会阻塞主、从服务器
- 复制用于提升读、从库持久化等
- 复制建立时先用RDB重建全量数据，然后接受主库的命令重放

## 集群

- 节点间使用Gossip协议协作
- 集群的键空间被分割为16384个槽（slot）
- 当数据不在本节点时，作重定向（MOVED、ASK）