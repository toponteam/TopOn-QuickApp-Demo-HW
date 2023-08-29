# 华为开发IDE集成@topon/quick-app-sdk-hw指引

1、项目根目录创建quickapp.config.js文件，添加内容如下：

```javascript
module.exports = {lintOnBuild:false}
```

2、安装依赖

```shell
npm i
```

3、从li-hua-demo-hw中c复制./chore/*文件夹到自己的项目根目录（一般情况无需修改， 若替换有误可酌情修改chore下的脚本）


注意：该项目下的chore文件夹的脚本是一个“示例”，您可以根据自己项目自行修改或者重写，其仅仅针对华为IDE进行替换sdk中使用了绝对路劲的引用，并不是sdk的一部分，仅仅是为了不必手动去处理路径的问题

4、解决IDE绝对路径引用问题（确保有./chore/*目录，确保package.json的script中有replace:baidu命令， 若无，请参考li-hua-demo-hw）

```shell
npm run replace:baidu
```

5、启动调试


# 常见问题

1、若npm i安装依赖后依然报错，请删除node_modules目录后，执行npm cache clean –force，后再重新 npm i
2、华为IDE打开快应用联盟IDE所创建的项目可能会有一些列的兼容错误，需参考文档[华为IDE常见错误参考文档](https://developer.huawei.com/consumer/cn/forum/topic/0201797994522880278)
3、更多错误请联系华为技术支持
