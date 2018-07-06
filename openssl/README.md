# OpenSSL

> SSL - Secure Sockets Layer  
> TLS - Transport Layer Security Protocol  

## X.509

- 证书标准，定义了证书中应该包含哪些内容。参考RFC5280

### 证书格式

- PEM：Privacy Enhanced Mail，BASE64编码
- DER：Distinguished Encoding Rules，二进制编码

```sh
# 查看证书的信息
openssl x509 -in certificate.pem -text -noout # PEM
openssl x509 -in certificate.der -text -noout -inform der # DER
```

## 相关文件拓展名

- CRT：X.509证书，常见于*nix系统，往往是PEM编码
- CER：X.509证书，常见于Windows系统，往往是DER编码
- KEY：通常用来存放一个公钥或者私钥，并非X.509证书，编码可能是PEM，也可能是DER

```sh
# 查看KEY的信息
openssl rsa -in key.key -text -noout # PEM
openssl rsa -in key.key -text -noout -inform der # DER
# 转换KEY
openssl rsa -pubin -in key.der -inform der -out key.pem -outform pem
```

- CSR：Certificate Signing Request，证书签名请求，并非证书。而是向权威证书颁发机构获得签名证书的申请。其核心内容是一个公钥等元数据。在生成这个申请的时候，同时也会生成一个私钥

```sh
# 查看REQ的信息
openssl req -noout -text -in req.csr 
openssl req -noout -text -in req.csr -inform der
```

- PFX/P12 - predecessor of PKCS#12，对*nix服务器来说，一般CRT和KEY是分开存放在不同文件中的，但Windows的IIS则将它们存在一个PFX文件中（因此这个文件包含了证书及私钥）。PFX通常会有一个提取密码，PFX使用时使用DER编码

```sh
# 转换到PEM
openssl pkcs12 -in for-iis.pfx -out for-iis.pem -nodes
# 生成，CACert.crt是CA的根证书
openssl pkcs12 -export -in certificate.crt -inkey privateKey.key  -certfile CACert.crt -out certificate.pfx
```

- JKS：Java Key Storage，这是Java的专利，跟OpenSSL关系不大。Java的keytool工具可以生成JKS以及将PFX转为JKS
