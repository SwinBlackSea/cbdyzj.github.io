# 高性能MySQL

## 并发控制

- 读锁（read lock）
- 写锁（write lock）

### 锁粒度

- 表锁（table lock）
- 行锁（row lock）

### 事务

- ACID
  - 原子性（atomicity）
  - 一致性（consistency）
  - 隔离性（isolation）
  - 持久性（durabiliy）
- 事务隔离级别（MySQL默认可重复读）
  - 未提交读（READ UNCOMMITED）
  - 提交读（READ COMMITED）
  - 可重复读（REPEATABLE READ）
  - 可串行化（SERIALIZABLE）
- 多版本并发控制（MVCC）

## MySQL储存引擎

### InnoDB储存引擎

- 聚簇索引
- InnoDB事务模型和锁

### MyISAM

- 不支持事务和行级锁

### Archive

- 只支持INSERT和SELECT

### Sphinx

- 支持全文索引

## MySQL时间线（Timeline）

- 3.23（2001）：引入MyISAM替代ISAM，支持InnoDB，引入全文索引和复制
- 4.0（2003）：重写复制，InnoDB成为标配，引入查询缓存，支持SSL
- 4.1（2005）：支持utf8，支持新的二进制协议和prepared语句
- 5.0（2006）：引入视图，触发器，储存过程，储存函数等新特性
- 5.1（2008）：引入分区，基于行的复制，plugin API
- 5.5（2010）：改善性能，拓展性，复制，分区；增加了可测量性的性能指标，改进架构
- 5.6（2013）：升级InnoDB储存引擎

- 5.7（2015）：安全性，性能等改进，新增JSON支持，新增generate column支持

## MySQL性能

- sysbench


- oltp与fileio测试
- Performance Schema
- SHOW PROFILE
- 慢查询
- EXPLAIN

## Schema与数据类型

- 更小的通常更好
- 简单就好
- 避免使用NULL
- 如果没有特殊需求，尽量使用TIMESTAMP
- 混用范式与反范式，缓存表（视图）以及其他技巧
- 使用独立的计数器表
- 避免过度设计，避免导致复杂查询的schema设计，避免列很多的schema设计
- 尽量使用整型，避免滥用ENUM和SET

## 索引

> 无论多么复杂的ORM工具，在精妙和复杂的索引面前都是“浮云”

### 索引类型

- B-Tree索引
  - InnoDB使用B+Tree作为索引数据结构
  - 适用于全键值，键值范围，键前缀查找
- 哈希索引
  - 基于哈希表实现，只有精确匹配所有列的查询才有效
  - InnoDB拥有自适应哈希索引的特殊功能
- 空间数据索引（R-Tree）
- 全文索引
  - 用于查处文本中的关键词，与B-Tree索引不冲突，适用于MATCH AGAINST操作

### 高性能索引策略

- 独立的列，始终将索引列放在比较符号的一侧
- 前缀索引和索引选择性
- 多列索引
- 选择合适的索引列顺序
- 聚簇索引
- 覆盖索引

## 查询性能优化

- 不要向数据库请求不需要的数据（多余的行，列）
- 缓存
- 查看扫描的行数和返回的行数
- 适当地将复杂查询拆分成简单查询
- 切分查询，如大量数据操作

## MySQL高级特性

- 分区表：PARTITION BY
- 视图，可更新视图
- 外键
- 储存过程、函数
- 触发器
- 全文索引
- 分布式事务（XA）
- 查询缓存
- JSON
- generate column

## 硬件优化

- CPU，内存池
- SSD RAID
- 其他等等

## 复制

- 基于行的复制
- 基于语句的复制（逻辑复制）
- 分离在线事务处理（OLTP），在线数据分析（OLAP）

## 拓展

- 数据分片

## 备份与恢复

- 逻辑备份
- 物理备份

### 备份内容

- 非显著数据：二进制日志，InnoDB事务日志
- 代码：触发器、储存过程
- 复制配置
- 服务器配置
- 选定的操作系统文件

### 备份数据

- SQL导出：mysqldump、SELECT INTO OUTFILE等
- 文件系统快照：ZFS、LVM快照

### 执行计划

#### EXPLAIN

- EXPLAIN EXTENDED：增加filtered列，接`SHOW WARNINGS`可以看到生成的语句
- EXPLAIN PARTITIONS：显示将访问的分区

#### 解读

- id：标识SELECT所属的行
- select_type：查询类型
  - SIMPLE：不包含子查询和UNION
  - PRIMARY：查询中包含任何复杂的子部分
  - SUBQUERY：子查询
  - DERIVED：派生表
  - UNION
  - UNION RESULT
  - （注意）SUBQUERY和UNION还可以被标记为DEPENDENT和UNCACHEABLE
- table：表、子查询、UNION结果
- type：关联类型
  - ALL：全表扫描
  - index：全表扫描（按索引）
  - range：范围扫描
  - ref：索引查找
  - eq_ref：最多返回一个结果
  - const：常量
  - system：常量
- possible_keys：查询可以使用哪些索引
- key：MySQL决定采用哪个索引来优化对该表的访问
- key_len：索引里使用的字节数
- ref：key列索引中查找值所用的列或者常量
- rows：为了找到所需的行而要读取的行数
- filtered：针对表里符合某个条件（WHERE子句或联接条件）的记录的百分比所做的悲观估算
- Extra：不适合在其他列显示的额外信息
  - Usinf index：使用覆盖索引
  - Using where：MySQL服务器将在储存引擎检索行后在进行过滤
  - Using temporary：对查询结果排序时会使用一个临时表
  - Using filesort：会对结果使用一个外部索引排序
  - Range checked for each record (index map: N)：没有好用的索引，新的索引将在联接的每一行上重新估算