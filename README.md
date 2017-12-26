## Menus简单笔记
### hover要兼容IE6的话，要在此引用csshover.htc文件，即：
```bash
body{
  behavior:url(csshover.htc);
}
```
********
### 关于兼容老版IE：
判断版本方法：jquery 1.9之前:function中加入  
```bash  
if($.browser.msie && $browser.version.substr(0,1)< 7){ ... }
```
jquery 1.9时加入：
```bash
$.support.leadingWhitespace
```
************
### CSS3中用到的样式：  
- 圆角：border-radius
- 渐变背景：liner-gradient
- 阴影：box-shadow
- 透明：transition
- 尖角：before伪类

### overflow属性：
* visible：不剪切内容。
* hidden：将超出对象尺寸的内容进行裁剪，将不出现滚动条。
* scroll：将超出对象尺寸的内容进行裁剪，并以滚动条的方式显示超出的内容。
* auto：在需要时剪切内容并添加滚动条，此为body对象和textarea的默认值。  
------------
###  注意settimeout与setInterval：
```bash
window.setTimeout("function",time)；//设置一个超时对象，只执行一次,无周期 
window.setInterval("function",time)；//设置一个超时对象，周期＝交互时间
```


