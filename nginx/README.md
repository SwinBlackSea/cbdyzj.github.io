## Modules

- Core：--without-http
- Access：--without-http_access_module
- Auth Basic：--without-http_auth_basic_module
- Auto Index：--without-http_autoindex_module
- FastCGI：--without-http_fastcgi_module
- Gzip：--without-http_gzip_module
- Proxy：--without-http_proxy_module
- Rewirite：--without-http_rewrite_module
- uWSGI：—without-http_uwsgi_module

## Request phase

- post-read：解析完毕头
- server-rewrite
- find-config：匹配location
- **rewrite**
- post-rewrite：完成内部跳转（实质是回退到3阶段）
- preaccess
- **access**
- post-access：控制access协作
- try-files
- **content**
- log

## Variable

```nginx
$args
$arg_?
$request_method
$uri
$request_uri
$http_?
```

## Static resources

no content command in location

- ngx_index: location /
- ngx_autoindex: location pathname
- ngx_static: location filename

## Nginx Proxy

1. 如果URI与地址一起指定，它会替换与location参数匹配的请求URI部分
2. 如果指定的地址没有URI，或者无法确定要替换的URI部分，则传递完整的请求URI（可能已修改）

## Rewrite

```nginx
rewrite regex replacement [flag];
```
