// webpack.dev.js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');

const devConfig = {
    mode: 'development',
    target: 'web', // webpack5.x 加上之后热更新才有效果
    /**
     * @description 开发工具，开启 source map，编译调试
     * @document https://webpack.docschina.org/configuration/devtool/
     */
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        // static允许我们在DevServer下访问该目录的静态资源
        // 简单理解来说 当我们启动DevServer时相当于启动了一个本地服务器
        // 这个服务器会同时以static-directory目录作为跟路径启动
        // 这样的话就可以访问到static/directory下的资源了
        static: {
            directory: path.join(__dirname, '../public'),
        },
        // 默认为true
        hot: true,
        // 是否开启代码压缩
        compress: true,
        // 启动的端口
        port: 9000,
        open: true,
    },
};

module.exports = merge(devConfig, baseConfig);
