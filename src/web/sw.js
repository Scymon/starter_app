const CACHE_NAME = 'starter-app-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/index.js',
  '../shared/assets/reset.css',
  '../shared/assets/darktheme.css',
  '../shared/constants/settings.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});