### Compile and install

```sh
# dependencies: zlib, pcre, openssl
./configure
# ./configure --help
make
make install
```

### Auto Index

```nginx
location / {
    root   /usr/share/nginx/html/regulations;
    autoindex on;
    autoindex_exact_size off;
    autoindex_localtime on;
    charset utf-8,gbk;
}

```

### Proxy

```nginx
location / {
    proxy_set_header    X-Real-IP           $remote_addr;
    proxy_set_header    Host                $http_host;
    proxy_set_header    X-Forwarded-Proto   $scheme;
    proxy_set_header    X-Forwarded-For     $proxy_add_x_forwarded_for;
    proxy_pass          http://127.0.0.1:3000;
}
```

### Virtual Host

```nginx
server {  
    listen      80;  
    server_name server_name;
    location / {  
    }    
}  
  
server {  
    listen      80;  
    server_name server_name;
    location / {  
    }
} 
```

### Redirect

```nginx
location / {
    rewrite ^(.*) https://$server_name$1 permanent;
}

location /foo {
    rewrite ^/(.*) http://server_name/bar redirect;
}
```

### SSL

```nginx
server {
    listen       443;
    server_name  server_name;

    ssl on;
    ssl_certificate      server_name.crt;
    ssl_certificate_key  server_name.key;

    location / {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
        proxy_pass         http://127.0.0.1:8000;
    }
}
```

### Single-page application

```nginx
location / {
    root   /path/to/static/;
    index  index.html;
    try_files $uri $uri/ /index.html;
}
```
