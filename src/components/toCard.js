if ('serviceWorker' in navigator) {
  const reg = await navigator.serviceWorker.register('/sw.js');
  console.log('Service worker register success', reg);
} else {
  console.log('Service worker register fail');
}
