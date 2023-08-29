/**
 * 处理华为IDE三方库绝对路径引用报错
 * 替换./node_modules/@topon/quick-app-sdk-hw/Adapter/Baidu/下引用union-quick-app-ad的路径为相对路径
 */
 const fs = require('fs')
 const reg = /src="union-quick-app-ad\/components\/mobadsAd"/gm;
 const value = 'src="../../../../../node_modules/union-quick-app-ad/components/mobadsAd"' // FIXME: 注意此处的目录层级，若替换有误，请检擦此处层级，替换后开发者需在自己开发项目中验证是否替换正确
 
 /**
  * 替换指定目录下的文件的指定内容
  * reg: 正则表达式
  * src：源文件目录
  * dest： 目标目录
  * value：替换后的值
  * @param {*} param0 
  */
 function replaceFile({ reg, src, dest, value }) {
   const source = fs.readFileSync(src, 'utf8')
   const target = source.replace(reg, value)
   fs.writeFileSync(dest, target);
 }
 
 const entrys = './node_modules/@topon/quick-app-sdk-hw/Adapter/Baidu'
 
 function run() {
   fs.readdir(entrys, (err, files) => {
     if (err) {
       return
     }
     if (files?.length) {
       files.forEach(item => {
         const path = `${entrys}/${item}`
         replaceFile({
           reg,
           src: path,
           dest: path,
           value
         })
       })
     }
   })
 }
 
 
 run()