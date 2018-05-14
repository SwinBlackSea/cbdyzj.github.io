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
        proxy_set_header    X-Real-IP   $remote_addr;
        proxy_set_header    Host        $http_host;
        proxy_pass          http://127.0.0.1:3000;
}
```

### Virtual Host

```nginx
server {  
        listen      80;  
        server_name foo.jianzhao.org;
        location / {  
        }         
}  
  
server {  
        listen      80;  
        server_name bar.jianzhao.org;
        location / {  
        }          
} 
```