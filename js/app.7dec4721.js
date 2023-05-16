(function(){"use strict";var e={945:function(e,n,t){var o=t(963),r=t(252);function a(e,n,t,a,i,u){const s=(0,r.up)("TheToolbar"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s),(0,r._)("main",null,[(0,r.Wm)(c,null,{default:(0,r.w5)((n=>[(0,r.Wm)(o.uT,{name:"route",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(n.Component),{pokemons:e.pokedex,isLoading:e.isLoading},null,8,["pokemons","isLoading"]))])),_:2},1024)])),_:1})])])}const i={class:"main-header"};function u(e,n,t,o,a,u){const s=(0,r.up)("MainNavigation");return(0,r.wg)(),(0,r.iD)("header",i,[(0,r.Wm)(s)])}var s=t.p+"img/vue-logo.ff417bdf.png",c=t.p+"img/github-logo.e4cf49de.png";const l=e=>((0,r.dD)("data-v-017ce6b9"),e=e(),(0,r.Cn)(),e),d={class:"navbar navbar-dark navbar-expand"},f={class:"container navbar-container"},m=l((()=>(0,r._)("img",{src:s,alt:"vue",className:"vue-image d-none d-md-block"},null,-1))),p=l((()=>(0,r._)("a",{href:"https://github.com/nothingnothings/VueDex",rel:"noreferrer",target:"_blank"},[(0,r._)("img",{src:c,alt:"github-source-code",className:"github-image d-none d-sm-block"})],-1)));function v(e,n,t,o,a,i){const u=(0,r.up)("NavigationItems");return(0,r.wg)(),(0,r.iD)("nav",d,[(0,r._)("div",f,[(0,r.Wm)(u),m,p])])}const h={class:"main-header__item-list navbar-nav"};function g(e,n,t,o,a,i){const u=(0,r.up)("NavigationItem");return(0,r.wg)(),(0,r.iD)("ul",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.navItems,(e=>((0,r.wg)(),(0,r.j4)(u,{key:e.id,link:e.link,text:e.text},null,8,["link","text"])))),128))])}var b=t(577);const k={class:"main-header__item nav-item px-4 text-nowrap"};function y(e,n,t,o,a,i){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("li",k,[(0,r.Wm)(u,{to:e.link},{default:(0,r.w5)((()=>[(0,r.Uk)((0,b.zw)(e.text),1)])),_:1},8,["to"])])}var w=(0,r.aZ)({name:"NavigationItemComponent",props:{text:{type:String},link:{type:String}}}),x=t(744);const _=(0,x.Z)(w,[["render",y]]);var C=_,N=(0,r.aZ)({name:"NavigationItemsComponent",data(){return{navItems:[{id:"pokedex",text:"Pokédex",link:"/"},{id:"search",text:"Procurar por um Pokémon",link:"/search"}]}},components:{NavigationItem:C},props:{}});const P=(0,x.Z)(N,[["render",g]]);var T=P,O=(0,r.aZ)({name:"MainNavigationComponent",components:{NavigationItems:T}});const j=(0,x.Z)(O,[["render",v],["__scopeId","data-v-017ce6b9"]]);var D=j,E=(0,r.aZ)({name:"TheToolbarComponent",components:{MainNavigation:D}});const L=(0,x.Z)(E,[["render",u],["__scopeId","data-v-7564afea"]]);var S=L,I=t(154),Z=t(204),A=(0,r.aZ)({components:{TheToolbar:S},data(){return{pokedex:[],isLoading:!1,isError:!1,errorMessage:""}},mounted(){this.loadPokemon()},methods:{async loadPokemon(){this.isLoading=!0;try{const e=await I.Z.get("https://pokeapi.co/api/v2/pokemon?limit=800"),n=e.data.results.map(((e,n)=>({id:n+1,url:e.url,name:e.name})));this.pokedex=n,this.isLoading=!1}catch(e){console.log(e),this.isError=!0,e instanceof Z.d7&&(this.errorMessage=e.message)}}}});const M=(0,x.Z)(A,[["render",a]]);var W=M,B=t(201);const F=[{path:"/",name:"Pokedex",component:()=>Promise.all([t.e(415),t.e(22)]).then(t.bind(t,512))},{path:"/pokedex/:pokemonId",name:"PokemonDetails",component:()=>t.e(587).then(t.bind(t,587))},{path:"/search",props:!0,name:"PokemonSearch",component:()=>Promise.all([t.e(415),t.e(780)]).then(t.bind(t,935))},{path:"/:pathMatch(.*)*",redirect:"/"}],V=(e,n,t)=>t||{top:0,left:0},q=(0,B.p7)({history:(0,B.r5)("/VueDex/"),linkActiveClass:"active-path",routes:F,scrollBehavior:V});var H=q;const K=(0,o.ri)(W);K.use(H),H.isReady().then((()=>{K.mount("#app")}))}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{22:"2350a093",415:"7d9be85f",587:"29568ac5",780:"af497ab7"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{22:"d98f1fbf",587:"acc6fe9c",780:"d98f1fbf"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-dex:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/VueDex/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={22:1,587:1,780:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],s=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(s)var l=s(t)}for(n&&n(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkvue_dex"]=self["webpackChunkvue_dex"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(945)}));o=t.O(o)})();
//# sourceMappingURL=app.7dec4721.js.map