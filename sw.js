self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('chatgpt.com/test')) {
    const secChUa = event.request.headers.get('sec-ch-ua') || '';
    self.clients.matchAll().then(c => c.forEach(x => x.postMessage(secChUa.includes('ChatGPTBrowser'))));
    event.respondWith(new Response(''));
  } else {
    event.respondWith(fetch(event.request));
  }
});
