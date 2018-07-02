### 得到key.der

```sh
$ echo $keybase64d | base64 -D > key.der
```

### 转化der到pem

```sh
$ openssl rsa -pubin -in key.der -inform DER -out key.pem -outform PEM
```
