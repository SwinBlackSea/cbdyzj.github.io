- 建库，删库

```mysql
CREATE DATABASE test_db CHARACTER SET utf8mb4;
DROP DATABASE test_db;
```

- 建表，删表

```mysql
CREATE TABLE test_table (
  column1 INT,
  column2 INT
);

DROP TABLE test_table;
```

- 增，删，改，查

```mysql
INSERT test_table (column1, column2) VALUE (1, 2);
INSERT test_table (column1, column2) VALUES (2, 3), (4, 5);

DELETE FROM test_table
WHERE column1 = 1;

UPDATE test_table
SET column2 = 4
WHERE column1 = 2；

SELECT * FROM test_table;

TRUNCATE TABLE test_table; 
```

- 数据类型

```
# 数字
TINYINT			1
SMALLINT		2
MEDIUMINT		3
INT(INTEGER)	4
BIGINT			8
FLOAT			4
DOUBLE			8
DECIMAL			MAX(M+2,D+2)

# 时间
DATE			3
TIME			3
YEAR			1
DATETIME		8
TIMESTAMP		3

# 字符
CHAR			0-255
VARCHAR			0-65535
TINYBLOB		0-255
TINYTEXT		0-255
BLOB			0-65535
TEXT			0-65535
MEDIUMBLOB		0-16777215
MEDIUMTEXT		0-16777215
LONGBLOB		0-4294967295
LONGTEXT		0-4294967295
```

- 动作

```
CREATE
DROP
INSERT INTO
DELETE
UPDATE
SELECT
```

- 实体

```
DATABASE
TABLE
VIEW
```

- 修饰

```
WHERE
IN
DISTINCT
LIMIT
ORDER BY
GROUP BY
HAVING
```

- 联接与组合

```
(INNER) JOIN ON
LEFT OUTER JOIN ON
UNION
```

- 函数

```
SUM()
AVG()
COUNT()
MAX()
MIN()
```

- 事务

```
START TRANSACTION
ROLLBACK
COMMIT
```

- 约束

```
PRIMARY KEY
UNIQUE
CONSTRAINT
INDEX
```



