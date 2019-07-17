# SSH

- ~/.ssh/config

```
ServerAliveInterval 60
# Host <name>
# HostName <host>
# User <user>
# Port <port> 
# IdentityFile <key>
```

## Use OpenSSL

```sh
openssl genrsa -out rsa_private_key.pem 2048
openssl rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem
openssl pkcs8 -topk8 -inform pem -in rsa_private_key.pem -outform pem -nocrypt -out pkcs8_rsa_private_key.pem
```