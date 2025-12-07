self.addEventListener('install', () => {
  console.log('[SW] Installing');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[SW] Activating');
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  console.log('[SW] Fetch:', event.request.url);
  
  if (event.request.url.includes('chatgpt.com/atlas/test')) {
    console.log('[SW] INTERCEPTED - blocking request');
    event.respondWith(new Response(''));
    
    const secChUa = event.request.headers.get('sec-ch-ua') || '';
    console.log('[SW] sec-ch-ua:', secChUa);
    
    self.clients.matchAll().then(c => {
      if (c[0]) c[0].postMessage(secChUa.includes('ChatGPTBrowser'));
    });
  } else {
    event.respondWith(fetch(event.request));
  }
});
