if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js').then((response)=>{
      console.warn("resp - ", response)
    }).catch((e) => {
      console.error(e)
    })
  } else {
    console.log('Service worker register fail');
  }