# react-webpack5-template

基于 webpack5，从 0 到 1 构建 react 技术栈工程化项目多页面配置模板

# 初始化

```bash
npm init
```

![Snipaste_2022-08-01_12-01-05](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/Snipaste_2022-08-01_12-01-05.png)

## 安装相关依赖

### webpack

```bash
npm install -D webpack webpack-cli
```

### React

```bash
npm install react react-dom
```

![Snipaste_2022-08-01_12-14-31](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/Snipaste_2022-08-01_12-14-31.png)

### 新建.gitignore 文件和图片目录

![Snipaste_2022-08-01_12-23-16](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/Snipaste_2022-08-01_12-23-16.png)

# 配置 Eslint 和 prettier

## 安装 prettier

```shell
npm install prettier --save-dev --save-exact
```

## 新建.prettierrc.js 和 .prettierignore 文件

官网 Options：https://prettier.io/docs/en/options.html

### .prettierrc.js

```javascript
module.exports = {
    // 一行的字符数，如果超过会换行，默认为80
    printWidth: 120,
    // 使用tab缩进，默认false
    // useTabs: false,
    tabWidth: 4,
    // 使用分号, 默认true
    semi: true,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    singleQuote: true,
    // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    trailingComma: 'es5',
    // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    bracketSpacing: true,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    arrowParens: 'avoid',
    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    jsxBracketSameLine: false,
};
```

### .prettierignore

```javascript
.idea/
.DS_Store
node_modules/
dist/
build/
```

### 安装 Pre-commit Hook

https://prettier.io/docs/en/precommit.html

# 配置 TypeScript 支持

# 配置 Babel

```bash
npm install -D @babel/core @babel/preset-env babel-loader @babel/plugin-transform-runtime @babel/preset-react
```

如果你对 Babel 相关依赖不了解，比如看到如下图所示的 npm 包，脑子里 🧠 想着“woc，这 tm 都是些什么？”，那么建议看`19组清风`大佬的[Babel 专栏文章](https://juejin.cn/column/7031914136783028237)，你将会学习到很多关于工作中实践到的东西

![Snipaste_2022-08-01_17-14-08](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/Snipaste_2022-08-01_17-14-08.png)

## 新建.babelrc 文件

不出意外，你在以往的像各种 Cli 工具生成的项目中，会遇到这几种文件

`babel.config.js`，`.babelrc`，`.babelrc.js`，以及 package.json 文件中的 babel 配置

# Linux 脚本

## 为啥要在这里做 Linux 笔记？

因为我遇到这个问题了，如下图片所示：

![Snipaste_2022-08-01_13-55-12](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/Snipaste_2022-08-01_13-55-12.png)

我们知道，在本地使用./assets/images 这样的相对路径，发布到 GitHub 上，是不能够显示出来图片的，因为你不知道他服务器的目录是怎么设置，所以我就去 GitHub 上面看看他的图片路径，长这样

`https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/截屏2022-08-01 12.01.05.png`

那么我们就学习一下 Linux 命令，最终写出以下的脚本代码：

```bash
find . -path ./node_modules -prune -o -name "*.md" -print | xargs sed -i '' 's/\/Users\/username\/Desktop\/react-webpack5-template/https:\/\/raw.githubusercontent.com\/JuctTr\/react-webpack5-template\/master/g'
```

什么意思呢？

忽略` ./node_modules`目录，查找`./`目录下，文件名结尾为`.md`的文件，并输出日志（-print）

接着把`/Users/username/Desktop/react-webpack5-template`字符串替换为`https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master`字符串

> 其实这个过程，就相当于[GitHub Action](https://docs.github.com/cn/actions/learn-github-actions/understanding-github-actions)中的工作流脚本做的工作，也就是我们研发流程提到的`持续集成（CI/CD）`中的一环
>
> ⚠️ 注意：图片名称最好不要带空格！！！

当然我们的脚本不能够这么来写，我猜测实际中，如我们上面的图片路径，在工作流脚本中，应该有类似的变量映射，应该体现为如下：

```bash
如所在网址使用${site}来获取
所在端口${port}来获取
以此类推
什么网站协议，相对，绝对路径等等都可以在脚本中使用类似上面的运算符来获取
```

研究中..........................

👻 本来为了创建一个工程化配置模板，搞着搞着变成了学习如何`rm -rf`跑路 🤡

# 附录

## 寻找某一个目录中的文件

```bash
find assets/images -name '*.png' // 寻找 assets/images 目录中，以.png结尾的文件
```

## 寻找某一个目录中的文件，但需忽略搜索某一个目录

```bash
find . -path ./node_modules -prune -o -name "*.png" -print
find . \( -path ./script  -o -path ./node_modules \) -prune -o -name "*.md" -print // 忽略两个目录，以此类推
```

## 查找文件内容包含 assets/images 的文件

```bash
grep -nr "assets/images" . --exclude-dir=node_modules // 忽略node_modules目录
```

## 修改某一个文件内容，并保存（-i）

```bash
sed -i '_bak' 's/a/b/g' index.txt
// 为啥这里有一个 '_bak', 是因为 Linux和Mac的sed有区别，这里表示备份文件，执行完会生成 index.txt_bak文件
```
