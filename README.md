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
**"webpack": "2.1.0-beta.22",**  _// 2.1.0-beta.23版本以上编译会报错,暂不升级_  
**"webpack-livereload-plugin": "0.8.*",**  _// 浏览器自动刷新_
>
**"babel-core": "6.16.*",**  
**"babel-preset-es2015": "6.16.*",**  
**"babel-preset-stage-2": "6.16.*",**
> 
**"vue": "2.0.*",**  _// Vue 框架_  
**"vue-router": "2.0.*",**  _// Vue 路由组建_  
**"vuex": "2.0.*",**  _// Vue 集中式状态管理架构_
> 
**"vue-loader": "9.5.*",**  _// webpack Vue 加载器_  
**"babel-loader": "6.2.*",**  _// webpack babel 加载器_  
**"style-loader": "0.13.*",**  _// webpack style 加载器(将CSS样式以`style`标签形式插入到文档)_  
**"css-loader": "0.25.*",**  _// webpack css 加载器(处理CSS文件中的url()等)_  
**"postcss-loader": "0.13.*",**  _// webpack postcss 加载器_
> 
**"postcss-cssnext": "2.8.*",**  _// postcss cssnext 插件_  
**"pug": "2.0.0-beta6",**  _// Pug(Jade) 模板引擎_  
**"normalize.css": "4.2.*"**  _// 样式初始化(非必要,可选)_

`编译`
```
// 开发环境
npm run dev

// 生产环境
npm run build
```
