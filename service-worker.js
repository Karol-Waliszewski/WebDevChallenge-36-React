"use strict";var precacheConfig=[["./index.html","33460dacb027b0e11d8af79705a15495"],["./static/css/main.a46835b0.css","d6367f005be3aefd183f5aeebc4a32b1"],["./static/js/main.039ee8da.js","01f523517ace95c17d400ee7f5492738"],["./static/media/001-next.ff2b9671.svg","ff2b96719fb93f9698bfe4070dea4e27"],["./static/media/002-back.290174b6.svg","290174b6259ea557de7fde682836d3c6"],["./static/media/product-1.8f5f940b.jpg","8f5f940b1b61c46c0ab8ab477012602f"],["./static/media/product-2-h.b2fa34fb.jpg","b2fa34fbd80ea8cfdc0b57c5786df633"],["./static/media/product-2.942d2d78.jpg","942d2d78a31883dcaab89a995343783b"],["./static/media/product-3.07db9bd6.jpg","07db9bd6fb58dc3ad31a40db44b5474b"],["./static/media/product-4.fea9af3e.jpg","fea9af3e092573abef711702304fa98e"],["./static/media/product-5.5489cdf1.jpg","5489cdf1b95febf91226145f2b241f81"],["./static/media/product-6.4735332c.jpg","4735332cb31ce9d13d07bb06b147c640"],["./static/media/slider-1.5b6c2bee.jpg","5b6c2bee53099e5fccd3de9fa4587cb0"],["./static/media/slider-2.5258f226.jpg","5258f22664ec5999b84e489464a0c617"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});