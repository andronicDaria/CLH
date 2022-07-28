const staticCacheName = 'app-cache-static';
const dynamicCacheName = 'app-cache-dynamic';
const assetUrls = ['index.html', 'offline.html'];

self.addEventListener('install', async (event) => {
  //include all files which we need put in cache
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetUrls);
});

self.addEventListener('activate', async (event) => {
  //on activate remaind anly my key and delete other
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name !== staticCacheName)
      .filter((name) => name !== dynamicCacheName)
      .map((name) => caches.delete(name))
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (url.origin === location.origin) {
    //receive static
    event.respondWith(cacheFirst(event.request));
  } else {
    // receive network
    event.respondWith(networkFirst(request));
  }
});
async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? (await fetch(request));
}

async function networkFirst(request) {
  ///can use framework WorkBox
  const cache = await caches.open(dynamicCacheName);
  try {
    //network exists
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    //network not exists take from cache
    //otherwise tahe from file by default
    const cached = await cache.match(request);
    return cached ?? (await caches.match('./offline.html'));
  }
}
