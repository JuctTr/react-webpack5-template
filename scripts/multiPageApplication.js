const path = require('path');
const chalk = require('chalk');
/**
 * @description 允许你写一个glob规则，来匹配符合规则的文件，类似shell命令模式，其内部使用 minimatch 执行匹配操作。
 * @document https://github.com/isLishude/blog/issues/63
 */
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { APP_ROOT_DIRECTORY } = require('../config/index');

/**
 * @description 多页面打包应用
 * @returns
 */
function getMultPageEntryConfig(packages) {
    const entry = {};
    const htmlWebpackPlugins = [];

    let entryFiles = glob.sync(path.join(APP_ROOT_DIRECTORY, './src/pages/*/index.+(tsx|jsx|js|ts)'));
    if (packages && packages.length > 0) entryFiles = packages.split('*');

    entryFiles.forEach(singleEntryFile => {
        const match = singleEntryFile.match(/src\/pages\/(.*)\/index\.(j|t)s/);
        const pageName = match && match[1];

        console.log(chalk.greenBright(`【入口文件】${singleEntryFile}`));
        console.log(chalk.greenBright(`【页面文件名】${pageName}`));

        entry[pageName] = singleEntryFile;

        // 配置项查看：https://github.com/jantimon/html-webpack-plugin#configuration
        htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                title: pageName,
                template: path.join(APP_ROOT_DIRECTORY, `public/index.html`),
                filename: `${pageName}.html`,
                chunks: ['vendors', pageName],
                inject: true,
                minify: {
                    html5: true,
                    collapseWhitespace: true,
                    preserveLineBreaks: false,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: false,
                },
            })
        );
    });

    return {
        entry,
        htmlWebpackPlugins,
    };
}

module.exports = getMultPageEntryConfig;
