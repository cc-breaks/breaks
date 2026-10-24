importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAb4dP5oiqO0SL-uEpy9hZNKbYqh6gP14k',
  authDomain: 'break-a75fc.firebaseapp.com',
  projectId: 'break-a75fc',
  storageBucket: 'break-a75fc.firebasestorage.app',
  messagingSenderId: '782726739521',
  appId: '1:782726739521:web:cc148df5a957264a6b78c0'
});

// رسائل الإشعار (notification) يعرضها المتصفح تلقائيًا؛ هذا للتهيئة فقط
firebase.messaging();

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (const c of list) { if ('focus' in c) return c.focus(); }
      return clients.openWindow('./');
    })
  );
});
