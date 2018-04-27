# MySQL常用内置函数

## 比较

- COALESCE：第一个非NULL值
- GREATEST：最大值
- LEAST：最小值，如有NULL，则返回NULL
- IN：检验某个值是否存在与IN集合中
- INTERVAL：返回第一个比第一个参数小的索引值，其内部参数必须为数值型,如果第一个参数为NULL值，则返回-1
- ISNULL：判NULL
- STRCMP：字符串比较
- IF：控制流函数
  - CASE
  - WHEN
  - THEN
  - ELSE
  - END
  - IFNULL
  - NULLIF

## 字符串

- LENGTH：字符串字节数
- CHAR_LENGTH：字符串字符数
- BIG_LENGTH：字符串的位数
- CONCAT：字符串连接
- ELT：选择函数
- FORMAT：格式化输出
- INSERT：字符串替换
- LCASE：所有字母小（大）写
  - UCASE
  - LOWER
  - UPPER
- LEFT：返回左侧字串
- RIGHT：返回右侧字串
- LOCATE：查找字串
  - POSITION
- LPAD：字符串填充
  - RPAD
- REPEAT：重复
- REPLACE：替换
- REVERSE：逆序
- SPACE：返回若干空格
- SUBSTRING：字串

## 数学

- CEIL：最小整数
  - CEILING
- FLOOR：比参数小的最大整数
- ROUND：四舍五入
- CRC32：循环冗余校验
- POW：求次方
  - POWER
- RAND：随机数
- SIGN：符号
- SQRT：开方
- TRUNCATE：取整

## 时间

- ADDDATE
- ADDTIME
- CONVERT_T：时区转换
- CURDATE：当前日
  - CURRENT_DATE
- CURTIME：当前时
  - CURRENT_TIME
- NOW：当前时间，在同一语句中一致
  - CURRENT_TIMESTAM
- DATE：返回日期部分
- WEEK
- DATEDIFF：相差天数
- TIMEDIFF
- DATE_ADD：日期运算
  - DATE_SUB
- DATE_FORMAT：时间格式化
- DAYNAME：星期
- MONTHNAME：月份
- DAYOFMONTH
  - DAYOFWEEK
  - DAYOFYEAR
- FROM_DAYS
- FROM_UNIXTIME：转换UNIX时间戳
- GET_FORMAT：得到指定格式
- HOUR：小时数
- LAST_DAY：月份最后一天的日期
- MAKEDATE
- MAKETIME
- MICROSECOND：返回时间的不同部分
  - MINUTE
  - MONTH
  - SECOND
  - TIME
- SEC_TO_TIME
- STR_TO_DATE
- SUBDATE
- SUBTIME
- SYSDATE：返回执行时的时间值

## 其他

- UUID
- UUID_SHORT
- ROW_NUMBER() OVER (PARTITION BY COL1 ORDER BY COL2)