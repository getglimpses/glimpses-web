if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,r,n)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}})).then(e=>{const s=n(...e);return i.default||(i.default=s),i})}))}}define("./service-worker.js",["./workbox-208bbc3c"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/glimpses-web/./fonts/AntDesign.ttf",revision:"3a2ba31570920eeb9b1d217cabe58315"},{url:"/glimpses-web/./fonts/Entypo.ttf",revision:"744ce60078c17d86006dd0edabcd59a7"},{url:"/glimpses-web/./fonts/Feather.ttf",revision:"6beba7e6834963f7f171d3bdd075c915"},{url:"/glimpses-web/./fonts/FontAwesome.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"/glimpses-web/./fonts/FontAwesome5_Brands.ttf",revision:"c6aef942e3668158ec29d4adcb2e768f"},{url:"/glimpses-web/./fonts/FontAwesome5_Solid.ttf",revision:"872545dde71de3842234bf6afe80c4cb"},{url:"/glimpses-web/./fonts/Foundation.ttf",revision:"e20945d7c929279ef7a6f1db184a4470"},{url:"/glimpses-web/./fonts/Ionicons.ttf",revision:"b2e0fc821c6886fb3940f85a3320003e"},{url:"/glimpses-web/./fonts/MaterialCommunityIcons.ttf",revision:"5a293a273bee8d740a045d9922b9a9ae"},{url:"/glimpses-web/./fonts/MaterialIcons.ttf",revision:"a37b0c01c0baf1888ca812cc0508f6e2"},{url:"/glimpses-web/./fonts/SimpleLineIcons.ttf",revision:"d2285965fe34b05465047401b8595dd0"},{url:"/glimpses-web/expo-service-worker.js",revision:"48c7ed4e7da9792af288a60d7242d615"},{url:"/glimpses-web/favicon-16.png",revision:"afd5733ac789ab1795f1ed7a26e1ecd3"},{url:"/glimpses-web/favicon-32.png",revision:"3d85359b37ca7590f8e91d593d02ddaf"},{url:"/glimpses-web/favicon.ico",revision:"17ec3e9614bd48f9f99a2b5f9f632f54"},{url:"/glimpses-web/index.html",revision:"70c6848e6ffaf8802381eaf122e92de4"},{url:"/glimpses-web/manifest.json",revision:"e6ad6508caaff19cee0de07847479128"},{url:"/glimpses-web/register-service-worker.js",revision:"18351225588cf588dee7745f5769774e"},{url:"/glimpses-web/serve.json",revision:"d0c694b562b2208635f250762cd7fc79"},{url:"/glimpses-web/static/js/app.f6ee3196.chunk.js",revision:"0137120d54df2a2230a9f1ce5c727c6a"},{url:"/glimpses-web/static/js/runtime~app.ee1a9966.js",revision:"076e008d23f201d6ae62963dfc21cd7a"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/glimpses-web/index.html"),{denylist:[/^\/_/,/\/[^/]+\.[^/]+$/]})),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
