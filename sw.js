// Tallysprig I2 (built on V7.7 + Health 6.1) offline app-shell cache. Retains existing browser-local food log.
const CACHE_NAME = 'tallysprig-shell-i2-20261021a';
const SHELL = ['./','./index.html','./manifest.webmanifest','./privacy.html','./medical.html','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('tallysprig-shell-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  // Do not intercept requests to Open Food Facts or scanner library CDN.
  if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    try {
      const response=await fetch(req);
      if(response.ok){const cache=await caches.open(CACHE_NAME);cache.put(req,response.clone()).catch(()=>{});}
      return response;
    } catch(err) {
      const cached=await caches.match(req);
      if(cached)return cached;
      if(req.mode==='navigate'){
        const shell=await caches.match('./index.html');
        if(shell)return shell;
      }
      throw err;
    }
  })());
});
