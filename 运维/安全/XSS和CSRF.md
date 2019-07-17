## 跨站脚本攻击（Cross-site scripting, XSS）

在第三方的攻击下，在目标网页使得浏览器执行不安全、不符合预期的JavaScript脚本，如用户输入，被篡改的持久化脚本，网站流量劫持，不安全的脚本来源等

### 防御方法

- 控制脚本来源的安全性，限制脚本的来源域
- 使用TLS加密流量与DNS，避免劫持
- 前后端校验用户输入，做相关安全过滤

## 跨站请求伪造（Cross-Site Request Forgery, CSRF）

浏览器Cookie行为，跨站伪造用户请求，如

```html
<!-- https://bob.com/attack_page.html -->

<a href="https://alice.com/sensitive_api?args=xxx">某个链接</a>
```

在用户浏览bob.com的网页时，浏览器可能会在用户不知情的情况下携带Cookie与伪造的参数访问alice.com的敏感操作API

### 防御方法

- 验证HTTP Referer字段：依赖浏览器
- 除Cookie外添加额外的验证：额外Token、额外Header参数、异常用户行为路径检测
- 不使用Cookie
- 使用非简单HTTP请求处理敏感操作：CSRF往往使用简单请求伪造