# 华为开发IDE集成@topon/quick-app-sdk-hw指引

1、项目根目录创建quickapp.config.js文件，添加内容如下：

```javascript
module.exports = {lintOnBuild:false}
```

2、安装依赖

```shell
npm i
```

4、解决IDE绝对路径引用问题

```shell
npm run replace:baidu
```

5、启动调试


# 常见问题

1、若npm i安装依赖后依然报错，请删除node_modules目录后重新 npm i
2、华为IDE打开快应用联盟IDE所创建的项目可能会有一些列的兼容错误，需参考文档[华为IDE常见错误参考文档](https://developer.huawei.com/consumer/cn/forum/topic/0201797994522880278)
3、更多错误请联系华为技术支持

