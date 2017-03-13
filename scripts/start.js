var pm2 = require('pm2');
var pkg = require('../package');
var path = require('path')

var name = pkg.config.vd || 'default-name';
name = name.replace(/\//g, '_');

pm2_connect()
    .then(() => pm2_delete(name)) // 先停止
    // 不管停止才成功与否，都启动
    .then(() => {
        return pm2_start(name)
    }, () => {
        return pm2_start(name)
    })
    .then(() => {
        pm2.disconnect()
    })
    .catch(() => {
        console.error(err);
        pm2.disconnect()
        process.exit(2);
    })

function pm2_start(appName) {
    return new Promise(function(resolve, reject) {
        pm2.start({
            name: appName,
            script: path.join(__dirname, '../react-imvc/bin/www'), // Script to be run
            exec_mode: 'cluster', // Allow your app to be clustered
            instances: 4, // Optional: Scale your app
            max_memory_restart: '300M', // Optional: Restart your app if it reaches 300M
        }, function(err, apps) {
            if (err) {
                reject(err)
            } else {
                resolve(apps)
            }
        });
    })
}

function pm2_delete(appName) {
    return new Promise(function(resolve, reject) {
        pm2.delete(appName, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

function pm2_list() {
    return new Promise(function(resolve, reject) {
        pm2.list(function(err, list) {
            if (err) {
                reject(err)
            } else {
                resolve(list)
            }
        })
    })
}

function pm2_connect() {
    return new Promise(function(resolve, reject) {
        pm2.connect(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

function pm2_describe(appName) {
    return new Promise(function(resolve, reject) {
        pm2.describe(appName, function(err, description) {
            if (err) {
                rejrect(err)
            } else {
                resolve(description)
            }
        })
    })
}

function pm2_kill() {
    return new Promise(function(resolve, reject) {
        pm2.killDaemon(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

function pm2_startup() {
    return new Promise(function(resolve, reject) {
        pm2.startup('centos', function(err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}