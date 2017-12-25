window.onload=function(){
			var isIE = !!window.ActiveXObject;
			var isIE6=isIE && !window.XMLHttpRequest;
			if (isIE6) {
				var Lis=document.getElementsByTagName('li');
				for (var i = 0; i < Lis.length; i++) {
					Lis[i].onmouseover=function(){
						var u =this,getElementsByTagName('ul')[0];
						if (u != undefinded) {
							u.style.display="block";
						}
					}

					Lis[i].onmouseout=function(){
						var u =this,getElementsByTagName('ul')[0];
						if (u != undefinded) {
							u.style.display="none";
						}
					}
				}
			}
		}