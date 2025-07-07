if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => {
        console.log('✅ Service Worker registered with scope:', reg.scope);

        reg.onupdatefound = () => {
          const newWorker = reg.installing;
          console.log('🆕 New Service Worker found!', newWorker);

          newWorker.onstatechange = () => {
            console.log('📦 SW state changed to:', newWorker.state);
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('📢 New content is available! Please refresh.');
            }
          };
        };
      })
      .catch(err => {
        console.error('❌ Registration failed:', err);
      });
  });
}
