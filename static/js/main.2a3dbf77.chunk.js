(this["webpackJsonphunt-web"]=this["webpackJsonphunt-web"]||[]).push([[0],{18:function(e,t,n){e.exports=n(45)},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=(n(23),n(24),function(){return r.a.createElement("header",{id:"main-header"},"JSHunt")}),s=n(3),u=n.n(s),l=n(16),d=n(11),p=n(12),m=n(13),f=n(15),h=n(17),v=n(14),g=n.n(v).a.create({baseURL:"https://rocketseat-node.herokuapp.com/api"}),b=(n(44),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={products:[],productInfo:{},page:1},e.loadProducts=Object(d.a)(u.a.mark((function t(){var n,a,r,o,c,i=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,t.next=3,g.get("/products?page=".concat(n));case 3:a=t.sent,r=a.data,o=r.docs,c=Object(l.a)(r,["docs"]),e.setState({products:o,productInfo:c,page:n});case 6:case"end":return t.stop()}}),t)}))),e.prevPage=function(){var t=e.state,n=t.page;t.productInfo;if(1!==n){var a=n-1;e.loadProducts(a)}},e.nextPage=function(){var t=e.state,n=t.page;if(n!==t.productInfo.pages){var a=n+1;e.loadProducts(a)}},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadProducts()}},{key:"render",value:function(){var e=this.state,t=e.products,n=e.page,a=e.productInfo;return r.a.createElement("div",{className:"product-list"},t.map((function(e){return r.a.createElement("article",{key:e._id},r.a.createElement("strong",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:"#"},"Acessar"))})),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{disabled:1===n,onClick:this.prevPage},"Anterior"),r.a.createElement("button",{disabled:n===a.pages,onClick:this.nextPage},"Pr\xf3ximo")))}}]),n}(a.Component)),E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2a3dbf77.chunk.js.map