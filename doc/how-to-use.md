# Blogsue 使用教程

## 前期准备

首先你需要 `NodeJS 6+`。

如果你希望你的博客引入评论系统，你需要一个 GitHub OAuth App 的 key。

如果不需要的话，可以直接跳过这一部分。

打开[这里](https://github.com/settings/developers)（Github 主页 -> Settings -> Developer settings），点击右上角“New OAuth App“，填写 Application name 为自定义 APP 名，HomePage URL 和 callback URL 均为你搭建博客所在的域名：![oauth](assets/oauth.png)

然后你会获得一个 AppKey 和 AppSecret。

## 博客配置

首先 clone 本仓库：

```
$ git clone https://github.com/CoderMing/blogsue.git
```

然后进入`src/config/`目录，新建一个`index.js`文件。

此文件就是 Blogsue 的配置文件。本项目提供了一个示例文件`index-example.js`。里面包含很多配置项，都有详细的注释声明。

你应该将上述申请到的 AppKey 和 AppSecret 填入此文件的 clientID 和 clientSecret 字段。

### 网易云音乐 ID 怎么找

![](./assets/netease-music.png)

## 打包

#### 一般情况

首先安装依赖 `cnpm install`。

一般情况下，运行以下命令即可打包出 build 后的文件：

```
$ npm run build
```

**Tips: GitHub Pages 下运行需要使用 hash 路由打包。** 本项目提供了对应的打包方法：

```
$ npm run build:hash
```

打包完成后文件放在`build/`文件夹中。

#### 使用 Docker

本项目采用`node:slim`底包。容器暴露端口默认为 8080。

首先在 docker hub 注册一个账号，然后创建 名为 `blogsue` 的仓库

你需要 fork 本项目，然后在 `travis` 界面添加以下环境变量

`DOCKER_LOGIN_USER_NAME` 你的 `docker hub` 登陆名

`DOCKER_LOGIN_PASSWORD` 你的 `docker hub` 登陆密码

`ENV_URL` 配置文件来源URL，你可以使用 `gist`，然后发布成 `secret` 版本，请确保请求到的是原始文本，如果你使用 `gist`，则以 `raw` 开头

`IMAGE_NAME` 镜像名字，默认 `blogsue`，请确保这里的名字与 上面的 `dockerhub` 仓库名 相同

#### 使用 Netlify 配置自动部署

使用上述的 Docker 部署存在以下问题

1. 每次对于配置文件的修改都需要重新 push，且 配置文件 与 整个项目耦合严重
2. 配置文件更新之后需要重新在服务器pull最新的Docker镜像然后重新运行

基于上述问题，我们另一种部署方案是使用 `Netlify`

###### 如何配置

`fork` 这个仓库，然后在 [Netlify](https://app.netlify.com/) 选择右上角的 `New site from git`，确认之后，`Site settings -> Build & Deploy -> Environment` 中添加 `ENV_URL` 环境变量，值为配置文件的存放地点

推荐使用 `gist`，但值需要 `Raw` 形式

比如你的 `Github` 名是 `coderming` `gist id` 是 `123456789`

那么 `ENV_URL` 的值为

```
https://gist.githubusercontent.com/coderming/123456789/raw/
```

构建脚本将读取这个配置文件并且将内容写入 `index.js`

**注意**

如果 `index.js`已存在于 `src/config`，那么 脚本 **不会** 覆盖你的文件，这也就意味着你存放在 `url` 上的内容**不会**生效

`netlify` 会读取 `netlify.toml`文件，然后帮你构建发布。

最后你会得到一个集成了CDN，letencrypt 的新网站。

当你在 `gist` 上更新了配置文件时，你需要去 `netlify` 手动触发构建`(Deploys -> Trigger Deploy)`。

尽情探索 `netlify` 的特性吧！

你还可以绑定自己的域名，比如绑定 `example.org` 域名

你需要为 `example.org` 添加 泛解析 `@` 的 `cname`，值为 `netlify` 为你生成的网站的域名

大体下面的形式
```
unrufled-torvalds-270d89.netlify.com
```

## 遇到问题？

你可以来本项目发 Issue。
