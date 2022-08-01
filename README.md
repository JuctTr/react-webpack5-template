# react-webpack5-template
基于webpack5，从0到1构建react技术栈工程化项目多页面配置模板

# 初始化

```bash
npm init
```

![截屏2022-08-01 12.01.05](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/截屏2022-08-01 12.01.05.png)

## 安装相关依赖

### webpack

```bash
npm add -D webpack webpack-cli
```

### React

```bash
npm add react react-dom
```

![截屏2022-08-01 12.14.31](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/截屏2022-08-01 12.14.31.png)

### 新建.gitignore文件和图片目录

![截屏2022-08-01 12.23.16](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/截屏2022-08-01 12.23.16.png)

# Linux脚本

## 为啥要在这里做Linux笔记？

因为我遇到这个问题了，如下图片所示：

![Snipaste_2022-08-01_13-55-12](https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/Snipaste_2022-08-01_13-55-12.png)

我们知道，在本地使用./assets/images这样的相对路径，发布到GitHub上，是不能够显示出来图片的，因为你不知道他服务器的目录是怎么设置，所以我就去GitHub上面看看他的图片路径，长这样

`https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master/assets/images/截屏2022-08-01 12.01.05.png`

那么我们就学习一下Linux命令，最终写出以下的脚本代码：

```bash
find . -path ./node_modules -prune -o -name "*.md" -print | xargs sed -i '' 's/\/Users\/username\/Desktop\/react-webpack5-template/https:\/\/raw.githubusercontent.com\/JuctTr\/react-webpack5-template\/master/g'
```

什么意思呢？

忽略` ./node_modules`目录，查找`./`目录下，文件名为`.md`的目录，并输出日志

接着把`/Users/username/Desktop/react-webpack5-template`字符串替换为`https://raw.githubusercontent.com/JuctTr/react-webpack5-template/master`字符串

> 其实这个过程，就相当于`GitHub Action`中的工作流脚本做的工作，也就是我们研发流程提到的`持续集成（CI/CD）`中的一环

当然我们的脚本不能够这么来写，我猜测实际中，如我们上面的图片路径，在工作流脚本中，应该有类似的变量映射，应该体现为如下：

```bash
如所在网址使用${site}来获取
所在端口${port}来获取
以此类推
什么网站协议，相对，绝对路径等等都可以在脚本中使用类似上面的运算符来获取
```



研究中..........................

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

## 查找文件内容包含 assets/images的文件

```bash
grep -nr "assets/images" . --exclude-dir=node_modules // 忽略node_modules目录
```

## 修改某一个文件内容，并保存（-i）

```bash
sed -i '_bak' 's/a/b/g' index.txt
// 为啥这里有一个 '_bak', 是因为 Linux和Mac的sed有区别，这里表示备份文件，执行完会生成 index.txt_bak文件
```
