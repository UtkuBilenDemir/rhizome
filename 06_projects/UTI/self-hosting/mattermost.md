---
title: mattermost
tags:
  - project
---

# mattermost
created: 2023-01-10 13:06

## guidelines:
https://docs.mattermost.com/install/install-docker.html

the docker approach is straight forward, a couple of points to consider:
- Change the domain on .env to something like `mattermost.whatever.com`
- Change **only** the postgress password
- follow the guide for non-internal-nginx version

## solution to the websocket problem:

https://forum.mattermost.com/t/solved-mattermost-websocket-error/3957/4

	Steps:
	1. open on your browser the developer tools
	2. select network and option ws(websocket)
	3. Is your host and origin different?
	4. copy the origin address
	5. change the line "AllowCorsFrom:" /volumes/app/mattermost/config.js to "AllowCorsFrom:<origin>"


## Referenceces
1. [[FOR-FREIGHT]]
2. [[ZSI]]
3. [[self-hosting]]