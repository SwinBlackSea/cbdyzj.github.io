@Grab('org.mybatis.generator:mybatis-generator-core:1.3.6')
@Grab('javax.xml.bind:jaxb-api:2.3.0')
@Grab('mysql:mysql-connector-java:8.0.11')
import org.mybatis.generator.api.MyBatisGenerator
import org.mybatis.generator.config.xml.ConfigurationParser
import org.mybatis.generator.internal.DefaultShellCallback

def xml = '''<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">                
<generatorConfiguration>
    <context id="mysql" targetRuntime="MyBatis3">

        <commentGenerator>
            <property name="suppressAllComments" value="true"/>
        </commentGenerator>

        <jdbcConnection driverClass="com.mysql.cj.jdbc.Driver"
                        connectionURL="jdbc:mysql://127.0.0.1:3306/mysql?useSSL=false"
                        userId="root"
                        password="password">
        </jdbcConnection>

        <javaModelGenerator targetPackage="entity" targetProject="."/>

        <sqlMapGenerator targetPackage="mapper" targetProject="."/>

        <javaClientGenerator type="mapper" targetPackage="mapper" targetProject="."/>

        <table schema="mysql"
                tableName="user"
                domainObjectName="User"
                enableCountByExample="false"
                enableUpdateByExample="false"
                enableDeleteByExample="false"
                enableSelectByExample="false"
                selectByExampleQueryId="false"
        />
    </context>
</generatorConfiguration>
'''

def bytes = xml.getBytes("utf8")
def warnings = []
def parser = new ConfigurationParser(warnings)
def config = parser.parseConfiguration(new ByteArrayInputStream(bytes))
def callback = new DefaultShellCallback(true)
def mg = new MyBatisGenerator(config, callback, warnings)
mg.generate(null)