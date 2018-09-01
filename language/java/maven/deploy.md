# Maven Deploy

- pom.xml

```xml
<distributionManagement>
    <repository>
        <id>default-nexus-release</id>
        <url>https://nexus.jianzhao.org/nexus/content/repositories/releases/</url>
    </repository>

    <snapshotRepository>
        <id>default-nexus-snapshot</id>
        <url>https://nexus.jianzhao.org/nexus/content/repositories/snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

- settings.xml

```xml
<servers>
    <server>
    <id>default-nexus-release</id>
    <username>admin</username>
    <password>admin123</password>
    </server>
    <server>
    <id>default-nexus-snapshot</id>
    <username>admin</username>
    <password>admin123</password>
    </server>
</servers>
```
