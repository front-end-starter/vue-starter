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
**"webpack": "2.3.*",**  _// webpack打包工具_  
**"webpack-livereload-plugin": "0.10.*",**  _// 浏览器自动刷新_  
>
**"babel-core": "6.24.*",**  
**"babel-preset-latest": "6.24.*",**  
>
**"vue": "2.2.*",**  _// Vue 框架_  
**"vue-template-compiler": "2.2.*",**  _// Vue 模板编译器_  
**"vue-router": "2.3.*",**  _// Vue 路由组件_  
**"vuex": "2.2.*",**  _// Vue 集中式状态管理架构_  
>
**"vue-loader": "11.3.*",**  _// webpack Vue 加载器_  
**"babel-loader": "6.4.*",**  _// webpack babel 加载器_  
**"style-loader": "0.16.*",**  _// webpack style 加载器(将CSS样式以`style`标签形式插入到文档)_  
**"css-loader": "0.27.*",**  _// webpack css 加载器(处理CSS文件中的url()等)_  
**"postcss-loader": "1.3.*",**  _// webpack postcss 加载器_  
>
**"postcss-cssnext": "2.10.*",**  _// postcss cssnext 插件_  
**"pug": "2.0.0-beta11",**  _// Pug(Jade) 模板引擎_  
**"normalize.css": "5.0.*"**  _// 样式初始化(非必要,可选)_  

`编译`
```
// 开发环境
npm run dev

// 生产环境
npm run build
```
