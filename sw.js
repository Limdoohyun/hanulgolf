self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 실시간 스코어와 DB 데이터 반영을 위해 네트워크 우선 방식 사용
  event.respondWith(fetch(event.request));
});
