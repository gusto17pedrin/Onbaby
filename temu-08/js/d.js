var wau_w_col=wau_w_col||"c4302bffffff";var wau_w_siz=wau_w_siz||"big";(function(e,t){"use strict";e=e||"docReady";t=t||window;var a=[];var n=false;var o=false;function r(){if(!n){n=true;for(var e=0;e<a.length;e++){a[e].fn.call(window,a[e].ctx)}a=[]}}function i(){if(document.readyState==="complete"){r()}}t[e]=function(e,t){if(typeof e!=="function"){throw new TypeError("callback for docReady(fn) must be a function")}if(n){setTimeout((function(){e(t)}),1);return}else{a.push({fn:e,ctx:t})}if(document.readyState==="complete"||!document.attachEvent&&document.readyState==="interactive"){setTimeout(r,1)}else if(!o){if(document.addEventListener){document.addEventListener("DOMContentLoaded",r,false);window.addEventListener("load",r,false)}else{document.attachEvent("onreadystatechange",i);window.attachEvent("onload",r)}o=true}}})("docReady",window);if(typeof _wau!=="undefined"){var WAU_ren=WAU_ren||[];docReady((function(){WAU_la()}))}function WAU_dynamic(e,t,a,n){if(typeof performance!=="undefined"&&typeof Storage!=="undefined"){try{var o=performance.navigation.type}catch(o){WAU_dynamic_request(e,t,a,n);return}if(o==1){try{var r=localStorage.getItem("_wautime");var i=localStorage.getItem("_waucount")}catch(o){WAU_dynamic_request(e,t,a,n);return}if(r!=null&&i!=null&&Math.floor(Date.now()/1e3)-r<300){var s=Math.round(Math.random()*(i*1.02-i*.98)+i*.98);WAU_r_d(s,e,n,true)}else{WAU_dynamic_request(e,t,a,n)}}else{WAU_dynamic_request(e,t,a,n)}}else{WAU_dynamic_request(e,t,a,n)}}function WAU_dynamic_request(e,t,a,n){if(typeof n==="undefined"){var n=-1;wau_w_col=t;wau_w_siz=a}var o="";if(document.title)o=encodeURIComponent(document.title.substr(0,80).replace(/(\?=)|(\/)/g,""));var r=document.getElementsByTagName("script")[0];(function(){var t=encodeURIComponent(document.referrer);var a=encodeURIComponent(window.location.href);var i=document.createElement("script");i.async="async";i.type="text/javascript";i.src="//whos.amung.us/pingjs/?k="+e+"&t="+o+"&c=d&x="+a+"&y="+t+"&a="+n+"&v=27&r="+Math.ceil(Math.random()*9999);r.parentNode.insertBefore(i,r)})()}function WAU_r_d(e,t,a,n){if(typeof a==="undefined"){var a=-1;var o=wau_w_col;var r=wau_w_siz}else if(a!=-1){var o=_wau[a][3];var r=_wau[a][4]}var i=parseInt(e.toString().replace(/,/g,""));e=WAU_addCommas(i);n=n||false;if(!n&&typeof Storage!=="undefined"&&i>5e4){try{localStorage.setItem("_wautime",Math.floor(Date.now()/1e3));localStorage.setItem("_waucount",i)}catch(e){}}if(r=="big"){var s=175;var d=40;var f=24;var c=32;var u=44;var p="0 0 0 75px"}else{var s=110;var d=30;var f=18;var c=23;var u=32;var p="0 0 0 55px"}var l="data:image/png;base64,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";var m=".waubutton {"+"display: inline-block;"+"position: relative;"+"background-color: rgb(0, 0, 0);"+"color: rgb(255, 255, 255);"+"text-decoration: none;"+"text-transform: lowercase;"+"letter-spacing: -2px;"+"text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);"+'-ms-filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#ff123852,Positive=true)";'+"zoom: 1;"+"width: 50px;"+"filter: progid: DXImageTransform.Microsoft.dropshadow(OffX=0, OffY=1, Color=#ff123852, Positive=true);"+"-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);"+"-webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);"+"box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);"+'-ms-filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=2,Color=#33000000,Positive=true)";'+"filter: progid: DXImageTransform.Microsoft.dropshadow(OffX=0, OffY=2, Color=#33000000, Positive=true);"+"}"+".waubutton:hover {"+"text-decoration: none !important;"+"color: #eeeaee !important;"+"}"+".waubutton p {"+"position: relative !important;"+'font-family: "Inconsolata", sans-serif;'+"font-weight: 700 !important;"+"line-height: inherit !important;"+"}"+".waubutton span {"+"position: absolute !important;"+"left: 15px !important;"+"width: 50px !important;"+"font-size: 30px !important;"+"-webkit-border-top-left-radius: 5px !important;"+"-webkit-border-bottom-left-radius: 5px !important;"+"-moz-border-radius-topleft: 5px !important;"+"-moz-border-radius-bottomleft: 5px !important;"+"border-top-left-radius: 5px !important;"+"border-bottom-left-radius: 5px !important;"+"text-decoration: none !important;"+"}"+".waubutton img {"+"margin-top: 3px !important;"+"vertical-align: 0 !important;"+"border: 0 !important;"+"mix-blend-mode: overlay;"+"}"+"@-webkit-keyframes push {"+"50% {"+"-webkit-transform: scale(0.9);"+"transform: scale(0.9);"+"}"+"100% {"+"-webkit-transform: scale(1);"+"transform: scale(1);"+"}"+"}"+"@keyframes push {"+"50% {"+"-webkit-transform: scale(0.9);"+"transform: scale(0.9);"+"}"+"100% {"+"-webkit-transform: scale(1);"+"transform: scale(1);"+"}"+"}"+".push {"+"display: inline-block;"+"-webkit-transform: translateZ(0);"+"transform: translateZ(0);"+"box-shadow: 0 0 1px rgba(0, 0, 0, 0);"+"}"+".push:hover,"+".push:focus,"+".push:active {"+"-webkit-animation-name: push;"+"animation-name: push;"+"-webkit-animation-duration: 0.2s;"+"animation-duration: 0.2s;"+"-webkit-animation-timing-function: linear;"+"animation-timing-function: linear;"+"-webkit-animation-iteration-count: 1;"+"animation-iteration-count: 1;"+"}",w=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css";if(g.styleSheet){g.styleSheet.cssText=m}else{g.appendChild(document.createTextNode(m))}w.appendChild(g);var h=document.createElement("a");h.href="https://whos.amung.us/stats/"+t+"/";if(typeof _wau_opt=="object"&&"target"in _wau_opt){h.target=_wau_opt.target}else{h.target="_top"}h.className="waubutton wau push";h.style.backgroundColor="#"+o.substring(0,6);h.style.width=s+"px";h.style.height=d+"px";h.style.lineHeight=d+"px";h.style.textAlign="left";h.title="Click to see what's popular on this site!";var A=document.createElement("span");var y=document.createElement("p");y.style.fontSize=f+"px";y.style.margin=p;y.style.color="#"+o.substring(6,12);var v=document.createElement("img");v.src=l;v.style.height=c+"px";v.style.width=u+"px";if(o.substring(0,6)=="000000"){v.style.mixBlendMode="normal";v.style.opacity="0.5"}var b=document.createTextNode(e);y.appendChild(b);A.appendChild(v);h.appendChild(A);h.appendChild(y);if(a>=0){var x=document.getElementById("_wau"+_wau[a][2]);x.parentNode.insertBefore(h,x.nextSibling)}else{WAU_insert(h,"amung.us/dynamic.js")}if(typeof WAU_cps_d=="undefined")WAU_cps(t);return i}function WAU_insert(e,t){var a=document.getElementsByTagName("script");for(var n=0;n<a.length;n++){if(a[n].src.indexOf(t)>0)a[n].parentNode.insertBefore(e,a[n].nextSibling)}}function WAU_la(){for(var e=0;e<_wau.length;e++){if(typeof WAU_ren[e]==="undefined"||WAU_ren[e]==false){if(typeof window["WAU_"+_wau[e][0]]==="function"){WAU_ren[e]=true;if(_wau[e][0]=="map")window["WAU_map"](_wau[e][1],_wau[e][3],_wau[e][4],_wau[e][5],_wau[e][6],e);else if(_wau[e][0]=="dynamic")window["WAU_dynamic"](_wau[e][1],_wau[e][3],_wau[e][4],e);else if(typeof _wau[e][3]!=="undefined")window["WAU_"+_wau[e][0]](_wau[e][1],_wau[e][3],e);else window["WAU_"+_wau[e][0]](_wau[e][1],e)}else{setTimeout(WAU_la,1e3)}}}}function WAU_addCommas(e){e+="";x=e.split(".");x1=x[0];x2=x.length>1?"."+x[1]:"";var t=/(\d+)(\d{3})/;while(t.test(x1)){x1=x1.replace(t,"$1"+","+"$2")}return x1+x2}function WAU_lrd(){var e=new Date;var t=e.getTimezoneOffset();var a=e._isDstObserved();if(typeof Intl==="undefined"||typeof Intl.DateTimeFormat==="undefined"){if(a&&t>=-120&&t<=-60||!a&&t>=-60&&t<=0){return false}}else{var n=Intl.DateTimeFormat();var o=n.resolvedOptions().timeZone;var r=o.toLowerCase().split("/");if(r[0]=="europe"&&(a&&t>=-120&&t<=-60||!a&&t>=-60&&t<=0)){return false}}return true}function WAU_lrs(){try{var e=JSON.parse(atob("WyJjb20vaWVucngzbThiOXh0Il0="));for(var t=0;t<e.length;t++){if(window.location.href.indexOf(e[t])>=0){return false}}}catch(e){}return true}Date.prototype._stdTimezoneOffset=function(){var e=new Date(this.getFullYear(),0,1);var t=new Date(this.getFullYear(),6,1);return Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())};Date.prototype._isDstObserved=function(){return this.getTimezoneOffset()<this._stdTimezoneOffset()};function WAU_cps(e){if(WAU_lrd()&&WAU_lrs()){window.Tynt=window.Tynt||[];if(typeof _wau_opt!="object"||typeof _wau_opt=="object"&&!("fbase"in _wau_opt)&&!("ft"in _wau_opt)){Tynt.push("w!"+e);(function(){var e=document.getElementsByTagName("script")[0];var t=document.createElement("script");t.async="async";t.type="text/javascript";t.src="https://cdn.tynt.com/tc.js";e.parentNode.insertBefore(t,e)})()}}}(function(){if(WAU_lrd()){if(typeof _wau_opt!="object"||typeof _wau_opt=="object"&&!("fbase"in _wau_opt)&&!("fd"in _wau_opt)){var e=document.createElement("script");e.src="https://t.dtscout.com/i/?l="+encodeURIComponent(window.location.href)+"&j="+encodeURIComponent(document.referrer);e.async="async";e.type="text/javascript";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}})();