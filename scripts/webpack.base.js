const path = require('path');
const chalk = require('chalk');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { APP_ROOT_DIRECTORY } = require('../config/index');
const getMultPageEntryConfig = require('./multiPageApplication');
/**
 * @description 编译进度条
 */
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const { entry, htmlWebpackPlugins } = getMultPageEntryConfig(process.env.packages); // 多页面打包应用

module.exports = {
    // extensions 表示需要解析的文件类型列表。
    //  webpack 的解析顺序是从左到右，因此要将使用频率高的文件类型放在左侧
    resolve: {
        // 别名配置
        alias: {
            '@src': path.resolve(__dirname, '../src'),
            '@common': path.resolve(__dirname, '../src/common'),
            '@components': path.resolve(__dirname, '../src/components'),
        },
        mainFiles: ['index', 'main'],
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.scss', '.json'],
    },
    entry,
    output: {
        path: path.resolve(APP_ROOT_DIRECTORY, 'dist'), // 打包后的文件存放的地方
        filename: '[name]_[chunkhash:8].js', // 打包后输出文件的文件名 chunkhash：文件指纹，一般用来做版本管理
        clean: true, // 与 CleanWebpackPlugin 插件的功能一样， 打包时，删除dist目录构建产物，重新生成
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/[name]_[hash:6].css',
        }),
        // 优化构建显示日志
        new FriendlyErrorsWebpackPlugin(),
        // 进度条
        new ProgressBarPlugin({
            format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
        }),
    ].concat(htmlWebpackPlugins),
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                // exclude: /node_modules/,
                include: path.resolve(APP_ROOT_DIRECTORY, 'src'),
                /*
                    thread-loader会对其后面的loader（这里是babel-loader）开启多进程打包。
                    进程启动大概为600ms，进程通信也有开销。(启动的开销比较昂贵，不要滥用)
                    只有工作消耗时间比较长，才需要多进程打包，仅在非常耗时的 loader 前引入 thread-loader
                    thread-loader必须最后执行，再次说明loader是从下往上，从右往左的执行顺序,所以想要使用thread-loader优化某项的打包速度，必须放在其后执行
                    */
                use: [
                    // {
                    //     loader: 'thread-loader', // https://webpack.docschina.org/loaders/thread-loader/
                    //     options: {
                    //         workers: 3,
                    //         workerParallelJobs: 2,
                    //         // ....
                    //     },
                    // },
                    'babel-loader',
                    // 'eslint-loader',
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                // exclude: /node_modules/,
                include: path.resolve(APP_ROOT_DIRECTORY, 'src'),
                use: [
                    // "style-loader",
                    // 和style-loader 冲突的，功能互斥的，不能一起用，因为style-loader 是把样式插入head里面，而MiniCssExtractPlugin是提取出独立的文件，以link方式引入
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader', // 代码生成完后置处理
                        options: {
                            postcssOptions: {
                                plugins: [['postcss-preset-env']],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // exclude: /node_modules/,
                include: path.resolve(APP_ROOT_DIRECTORY, 'src'),
                // webpack5 资源模块改了 https://webpack.docschina.org/guides/asset-modules/
                type: 'asset/resource',
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             limit: 10240,
                //             name: '[name]_[hash:8].[ext]', // ext：资源后缀名称
                //         },
                //     },
                // ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                // exclude: /node_modules/,
                include: path.resolve(APP_ROOT_DIRECTORY, 'src'),
                type: 'asset/resource',
                // webpack5 资源模块改了 https://webpack.docschina.org/guides/asset-modules/
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: '[name]_[hash:8][ext]',
                //         },
                //     },
                // ],
            },
            // ===================================== 自定义loader =====================================
            // {
            //     test: /.js$/,
            //     // exclude: /node_modules/,
            //     include: path.resolve(APP_ROOT_DIRECTORY, 'src'),
            //     use: [
            //         {
            //             loader: path.join(APP_ROOT_DIRECTORY, `loaders/condition-loader.js`),
            //             options: {
            //                 name: 'conditionLoader',
            //                 fileType: 'js',
            //             },
            //         },
            //     ],
            // },
        ],
    },
    // 设置分包，对基础包和业务基础包打包成一个文件，如react、react-dom、redux、react-redux等
    /**
     * 这个字段key 为 业务代码中 `import React from 'react';` 里面的 react，而value则为 window.React
     * 如果不知道value是什么？可以查看比如：https://unpkg.com/react-dom@18/umd/react-dom.production.min.js中，
     * umd是以什么名称来导出的
     */
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        // react: ['https://unpkg.com/react@18/umd/react.development.js', 'react'],
        // ReactDOM: ['https://unpkg.com/react-dom@18/umd/react-dom.development.js', 'react-dom'],
        // lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js', '_'],
        // lodash: {
        //     commonjs: 'lodash',
        //     amd: 'lodash',
        //     root: '_', // 指向全局变量
        // },
    },
    /**
     * @document https://webpack.docschina.org/configuration/stats/
     */
    stats: {
        errorDetails: true,
    },
};
