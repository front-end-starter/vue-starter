# Vue Demo

## 环境需求
> `nodejs 4.0 +` (`nodejs 4.0` 默认 `npm` 版本 为 `2.0`, 需要手动升级到 `npm 3.0 +`, 或直接使用 `nodejs 6.0 +`)

> `npm 3.0 +`

> `webpack`

> **`IIS`** **`Nginx`** 等Web服务器

## 附录
**`MyItStudy:`** [_**Vue Demo**_](https://my.oschina.net/MyItStudy/blog/754367)

`插件简介`
>
**"webpack": "3.4.*",**  _// webpack打包工具_  
**"webpack-merge": "4.1.*",**  _// 合并函数_  
**"webpack-livereload-plugin": "0.11.*",**  _// 浏览器自动刷新_  
>
**"babel-core": "6.25.*",**  
**"babel-preset-latest": "6.24.*",**  
>
**"vue": "2.4.*",**  _// Vue 框架_  
**"vue-template-compiler": "2.4.*",**  _// Vue 模板编译器_  
**"vue-router": "2.7.*",**  _// Vue 路由组件_  
**"vuex": "2.3.*",**  _// Vue 集中式状态管理架构_  
>
**"vue-loader": "13.0.*",**  _// webpack Vue 加载器_  
**"babel-loader": "7.1.*",**  _// webpack babel 加载器_  
**"vue-style-loader": "3.0.*",**  _// webpack style 加载器(将CSS样式以`style`标签形式插入到文档)_  
**"css-loader": "0.28.*",**  _// webpack css 加载器(处理CSS文件中的url()等)_  
**"postcss-loader": "2.0.*",**  _// webpack postcss 加载器_  
>
**"postcss-cssnext": "3.0.*",**  _// postcss cssnext 插件_  
**"pug": "2.0.0-rc.3",**  _// Pug(Jade) 模板引擎_  
**"normalize.css": "7.0.*"**  _// 样式初始化(非必要,可选)(如未安装次插件请删除`/src/app.vue`中的导入代码)_  

`编译`
```
// 开发环境
npm run dev

// 生产环境
npm run build
```

`运行`
```
// 开发环境
http://domain?env=dev

// 生产环境
http://domain
```
