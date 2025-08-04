---
title: nginx
tags:
  - project
---

# nginx
created: 2023-01-10 13:25

## basic config:

```
conf
server {
  listen 80;
  listen [::]:80;

  server_name example.com;

  location / {
      proxy_pass http://localhost:3000/;
  }
}
```

https://www.linode.com/docs/guides/use-nginx-reverse-proxy/
https://www.youtube.com/watch?v=B62QSbPhh1s

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
server {
    server_name openproject.vis.zsi.at;
    location / {
        proxy_pass_request_headers on;
        proxy_ssl_verify off;
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-for $remote_addr;
        proxy_hide_header X-Frame-Options;
    }



    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/openproject.vis.zsi.at/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/openproject.vis.zsi.at/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = openproject.vis.zsi.at) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    server_name openproject.vis.zsi.at;
    listen 80;
    return 404; # managed by Certbot


}


## Referenceces
1. [[self-hosting]] 
2. [[Linux]]