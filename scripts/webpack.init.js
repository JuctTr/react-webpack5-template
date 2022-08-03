const path = require('path');
const inquirer = require('inquirer');
const execa = require('execa');
/**
 * @description 允许你写一个glob规则，来匹配符合规则的文件，类似shell命令模式，其内部使用 minimatch 执行匹配操作。
 * @document https://github.com/isLishude/blog/issues/63
 */
const glob = require('glob');
const chalk = require('chalk');
const { APP_ROOT_DIRECTORY } = require('../config/index');

const entry = {};

console.log(process.env.NODE_ENV);

const entryFiles = glob.sync(path.join(APP_ROOT_DIRECTORY, './src/pages/*/index.+(tsx|jsx|js|ts)'));
entryFiles.forEach(singleEntryFile => {
    const match = singleEntryFile.match(/src\/pages\/(.*)\/index\.(j|t)s/);
    const pageName = match && match[1];
    entry[pageName] = singleEntryFile;
});

if (!entryFiles.length) {
    console.log(chalk.redBright('不合法目录，请检查src/pages/*/index'));
    return;
}

inquirer
    .prompt([
        {
            type: 'checkbox',
            message: '请选择需要启动的项目:',
            name: 'selectPageList',
            choices: [...entryFiles, 'all'], // 选项
            // 校验最少选中一个
            validate(value) {
                console.log('validate => ', value);
                if (!value.length) {
                    return new Error('至少选择一个项目进行启动，请按空格键选择');
                }
                return true;
            },
            // 当选中all选项时候 返回所有packagesList这个数组
            filter(value) {
                if (value.includes('all')) {
                    return entryFiles;
                }
                return value;
            },
        },
    ])
    .then(res => {
        const message = `当前选中Package: ${res.selectPageList.join(' , ')}`;
        console.log(chalk.greenBright(message));
        executeBuild(res.selectPageList);
    });

async function executeBuild(selectPageList) {
    const stringLists = selectPageList.join('*');
    const isProd = process.env.NODE_ENV === 'production';
    const options = isProd
        ? ['--config', './scripts/webpack.prod.js']
        : ['serve', '--config', './scripts/webpack.dev.js'];
    await execa('webpack', options, {
        stdio: 'inherit',
        env: {
            packages: stringLists,
        },
    });
}
