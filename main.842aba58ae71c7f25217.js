(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("JBxO"),e("FdtR");var o=function(n){return new Promise((function(t){setTimeout((function(){t(n)}),n)}))},a=function(n){return console.log("Resolved after "+n+" ms")};o(2e3).then(a),o(1e3).then(a),o(1500).then(a);e("lmye"),e("D/wG"),e("wCa+");var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,t){return new Promise((function(e){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}))},r=function(n){return console.table(n)};c(i,"Mango").then(r),c(i,"Lux").then(r);var u=function(n){return new Promise((function(t,e){var o=s(200,500);setTimeout((function(){Math.random()>.3?t([n.id,o]):e(n.id)}),o)}))},s=function(n,t){return Math.floor(Math.random()*(t-n+1)+n)},f=function(n){console.log("Transaction "+n[0]+" processed in "+n[1]+" ms")},m=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};u({id:70,amount:150}).then(f).catch(m),u({id:71,amount:230}).then(f).catch(m),u({id:72,amount:75}).then(f).catch(m),u({id:73,amount:100}).then(f).catch(m);e("L1EO")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.842aba58ae71c7f25217.js.map