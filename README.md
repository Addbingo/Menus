# Menus
hover要兼容IE6的话，要在此引用csshover.htc文件，即：  
```bash
body{
  behavior:url(csshover.htc);
}
```  
********
关于兼容老版IE：
jquery 1.9之前:通过:function中加入判断 ：  
```bash
if($.browser.msie && $browser.version.substr(0,1)< 7){ ... }
jquery 1.9时：$.support.leadingWhitespace
```
*****

圆角：border-radius
渐变背景：liner-gradient
阴影：box-shadow
透明：transition
尖角;before伪类

overflow：hidden与auto的区别

settimeout与。。。

