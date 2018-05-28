```mysql
-- 事件
SHOW VARIABLES LIKE 'event_scheduler';
SET GLOBAL event_scheduler = 'ON';
-- 慢查询
SHOW VARIABLES LIKE 'long_query_time';
SHOW VARIABLES LIKE 'slow_query_%';
SET GLOBAL slow_query_log = 'ON';
```