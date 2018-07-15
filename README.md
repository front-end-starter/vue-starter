# Vue Demo

## 环境需求
> `nodejs >= 8.0.0`  
> `npm >= 5.0.0` 或 `yarn >= 1.0.0`

> **`IIS`** **`Nginx`** 等Web服务器

## 附录
**`MyItStudy:`** [_**Vue Demo**_](https://my.oschina.net/MyItStudy/blog/754367)

`插件简介`
> **"webpack": "4.16.*",**  _// webpack打包工具_  
> **"webpack-cli": "3.0.*",**  _// webpack命令行工具_  
> **"webpack-merge": "4.1.*",**  _// 合并函数_  
> **"webpack-livereload-plugin": "2.1.*",**  _// 浏览器自动刷新_  
>
> **"@babel/core": "~7.0.0-beta",**  _// babel核心_  
> **"@babel/preset-env": "~7.0.0-beta",**  _// JavaScript环境预设_  
> **"@babel/register": "~7.0.0-beta",**  _// require hook_  
> **"@babel/plugin-syntax-dynamic-import": "~7.0.0-beta",**  _// import 动态加载_  
>
> **"vue": "2.5.*",**  _// Vue 框架_  
> **"vue-template-compiler": "2.5.*",**  _// Vue 模板编译器_  
> **"vue-router": "3.0.*",**  _// Vue 路由组件_  
> **"vuex": "3.0.*",**  _// Vue 集中式状态管理架构_  
>
> **"vue-loader": "15.2.*",**  _// webpack Vue 加载器_  
> **"babel-loader": "~8.0.0-beta",**  _// webpack babel 加载器_  
> **"css-loader": "1.0.*",**  _// webpack css 加载器(处理CSS文件中的url()等)_  
> **"postcss-loader": "2.1.*",**  _// webpack postcss 加载器_  
> **"pug-plain-loader": "1.0.*"**  _// webpack Pug 加载器_  
>
> **"postcss-preset-env": "5.2.*",**  _// css预设_  
> **"pug": "2.0.*",**  _// Pug 模板引擎_  
> **"normalize.css": "8.0.*"**  _// 样式初始化(非必要,可选)(如未安装次插件请删除`/src/app.vue`中的导入代码)_  

`编译`
```
// 开发环境
yarn run dev  
或
npm run dev

// 生产环境
yarn run build  
或
npm run build
```

`运行`
```
// 开发环境
http://domain?env=dev

// 生产环境
http://domain
```
