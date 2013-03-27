define("../amdcompiler",["require","module"],function(e,t){var n=t.config(),r=n&&n.precompiled,i=function(e,t,n,r){return arguments.length==3?(r=n,n=undefined):arguments.length==2&&(r=t,t=n=undefined),{buildCache:{},load:function(e,s,o,u){var a=s.toUrl(e);if(t&&e.substr(0,1)!="/"&&!e.match(/:\/\//)){var f=!1;if(n)for(var l=0;l<n.length;l++)e.substr(e.length-n[l].length-1)=="."+n[l]&&(f=!0);f||(a+="."+t)}var c=this;i.fetch(a,function(t){r(e,t,s,function(t){typeof t=="string"?(u.isBuild&&(c.buildCache[e]=t),o.fromText(t)):o(t)},o.error)},o.error)},write:function(e,t,n){var r=this.buildCache[t];r&&n.asModule(e+"!"+t,r)},writeFile:function(t,n,r,i){i.asModule(t+"!"+n,r.toUrl(n+"."+e+".js"),this.buildCache[n])}}};if(typeof window!="undefined"){var s=function(e){var t=!0,n=/^(\w+:)?\/\/([^\/]+)/.exec(e);return typeof window!="undefined"&&n&&(t=n[2]===window.location.host,n[1]&&(t&=n[1]===window.location.protocol)),!t},o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=function(e){var t,n,r;if(e){var t=new XMLHttpRequest;if(!("withCredentials"in t)){if(typeof XDomainRequest=="undefined")throw new Error("getXhr(): CORS not supported");t=new XDomainRequest}return t}if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;for(n=0;n<3;n+=1){progId=o[n];try{t=new ActiveXObject(progId)}catch(i){}if(t){o=[progId];break}}if(!t)throw new Error("getXhr(): XMLHttpRequest not available");return t};i.fetch=function(t,n,i){if(r instanceof Array){for(var o=0;o<r.length;o++)if(t.substr(0,r[o].length)==r[o])return e([t+"."+pluginId+".js"],n,i)}else if(r===!0)return e([t+"."+pluginId+".js"],n,i);var a=u(s(t));a.open("GET",t,!requirejs.inlineRequire),a.onreadystatechange=function(e){var r,s;if(a.readyState===4){r=a.status;if(r>399&&r<600)s=new Error(t+" HTTP status: "+r),s.xhr=a,i&&i(s);else{if(a.responseText=="")return i(new Error(t+" empty response"));n(a.responseText)}}},a.send(null)}}else if(typeof process!="undefined"&&process.versions&&!!process.versions.node){var a=requirejs.nodeRequire("fs");i.fetch=function(e,t){t(a.readFileSync(e,"utf8"))}}else typeof Packages!="undefined"?i.fetch=function(e,t,n){var r,i,s="utf-8",o=new java.io.File(e),u=java.lang.System.getProperty("line.separator"),a=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),s)),f="";try{r=new java.lang.StringBuffer,i=a.readLine(),i&&i.length()&&i.charAt(0)===65279&&(i=i.substring(1)),r.append(i);while((i=a.readLine())!==null)r.append(u),r.append(i);f=String(r.toString())}catch(l){n&&n(l)}finally{a.close()}t(f)}:i.fetch=function(){throw new Error("Environment unsupported.")};return i}),define("amdcompiler",["../amdcompiler"],function(e){return e}),define("cs",["amdcompiler","module"],function(e,t){return pluginBuilder="./cs-builder",e(t.id,"coffee",function(e,t,n,r,i){require(["coffee-script"],function(e){r(e.compile(t))})})}),function(){define("cs!test",{its:"coffee"})}.call(this);