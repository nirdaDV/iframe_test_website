self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('chatgpt.com/test')) {
    // IMMEDIATELY respond - blocks network before anything else
    event.respondWith(new Response(''));
    
    // Then do async work after response is already sent
    const secChUa = event.request.headers.get('sec-ch-ua') || '';
    self.clients.matchAll().then(c => {
      if (c[0]) c[0].postMessage(secChUa.includes('ChatGPTBrowser'));
    });
  } else {
    event.respondWith(fetch(event.request));
  }
});
