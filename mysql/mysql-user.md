## 用户管理

```mysql
# 创建用户
CREATE USER 'cbdyzj'@'localhost' IDENTIFIED BY 'password';
# 删除用户
DROP USER 'cbdyzj'@'%';
# 授予权限
GRANT ALL PRIVILEGES ON *.* TO 'cbdyzj'@'%' IDENTIFIED BY 'password';
GRANT SELECT, INSERT ON *.* TO 'cbdyzj'@'localhost';
# 撤销权限
REVOKE INSERT ON *.* FROM 'cbdyzj'@'localhost';
REVOKE GRANT OPTION ON *.* FROM 'cbdyzj';
# 查看权限
SHOW GRANTS;
SHOW GRANTS FOR 'cbdyzj';
SHOW GRANTS FOR 'cbdyzj'@'localhost';
# 修改密码
SET PASSWORD FOR 'cbdyzj' = PASSWORD('123456');
ALTER USER 'cbdyzj' IDENTIFIED BY 'password';
# 刷新权限
FLUSH PRIVILEGES;
# 相关表
SELECT * FROM mysql.user;
SELECT * FROM mysql.db;
SELECT * FROM mysql.tables_priv;
SELECT * FROM mysql.columns_priv;
SELECT * FROM mysql.procs_priv;
```

