#!/bin/bash
# 切换到 bash 执行文件所在的目录
cd `dirname $0`
cd ../

start() {
	node ./current/scripts/start.js
}

pm2 save
pm2 kill
pm2 resurrect
start

exit 0