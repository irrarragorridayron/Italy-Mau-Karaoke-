const CACHE="italy-mau-karaoke-v2";
const APP_SHELL=["./","./index.html","./manifest.webmanifest","./service-worker.js","./icons/icon-192.png","./icons/icon-512.png","./assets/logo.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET") return;
  if(r.mode==="navigate"||r.destination==="document"){
    e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put(r,c));return res;}).catch(()=>caches.match(r).then(x=>x||caches.match("./index.html"))));
    return;
  }
  e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{if(res.ok&&new URL(r.url).origin===location.origin){const x=res.clone();caches.open(CACHE).then(k=>k.put(r,x));}return res;}).catch(()=>caches.match("./index.html"))));
});
