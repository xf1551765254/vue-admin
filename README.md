## 本资源由 itjc8.com 收集
# vue_shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
npm i webpack-node-externals lodash.merge -D
lodash.merge与webpack-node-externals用来做性能优化，这两个并不是必须的。

npm i vue-server-renderer express --save
本项目的服务器使用nodejs搭配express框架来写，可以根据读者习惯换成其他nodejs框架。
vue-server-renderer是vue提供的用来做ssr的库，它可以帮我们在nodejs环境下使用vue实例渲染出html。

npm i cross-env -D
由于在build指令中要使用到环境变量，而环境变量的语法需要跨平台(比如代码是在windows写的，部署是在linux)，所以使用这个库来做命令行指令的跨平台处理
npm install koa koa-static --save --registry=https://registry.npm.taobao.org
// https://www.jb51.net/article/147323.htm
//https://blog.csdn.net/qq_31126175/article/details/95356102