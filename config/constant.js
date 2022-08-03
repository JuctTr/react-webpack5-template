const fs = require('fs');

/**
 * 项目的根目录路径
 * realpathSync: 通过解析 .、.. 和符号链接同步计算规范路径名。
 */
const APP_ROOT_DIRECTORY = fs.realpathSync(process.cwd());

module.exports = {
    APP_ROOT_DIRECTORY,
};
