# 触发器

```mysql
CREATE TABLE foo_backup
  LIKE foo;

CREATE TRIGGER foo_delete_backup
  BEFORE DELETE
  ON foo
  FOR EACH ROW
  BEGIN
    INSERT INTO foo_backup
      SELECT foo.*
      FROM foo
      WHERE foo.id = old.id;
  END;
```