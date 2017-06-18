# react-imvc-template

- 同构设计：ISOMORPHIC-MVC
- 同构代码：一段代码，既可以运行在浏览器端，也可以运行在服务端（node.js）
- 同构渲染：renderToString VS renderToDOM
- 同构 MVC：服务端和浏览器端共用一套 MVC 框架

## 使用到的技术
- react/react-lite
- relite
- webpack
- whatwg-fetch/node-fetch
- pm2
- and more

## How to use
```bash
git clone
npm install
npm start
npm run build
```


##目录结构
<pre>
. 
├── bin                // Node启动文件
├── build              // 构建服务和webpack配置
├── scripts            // 启动、关闭脚本
├── server             // 服务端渲染文件
├── src                // 源代码目录
│   ├── app-demo   	  // demo目录
│   │   ├── components // 项目共享组件
│   │   ├── share      // 项目共享方法
│   │   ├── home       // 具体页面
│   │   │   ├── controller.js  
│   │   │   ├── model.js       
│   │   │   └── view.js        
│   │   └── *          // 其他页面
│   ├── app-*          // 其他项目
│   ├── components     // 共享组件
│   ├── share          // 共享方法
│   ├── index.js       // js入口
│   └── routes.js      // 路由
├── static             // 项目build生成文件，存放css等静态文件
├── package.json       // 项目配置文件
└── README.md          // 项目介绍
</pre>
