const INTERVAL = 100;
const MAX_RETRIES = 20;

export function core () {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://www.google.com/jsapi';
    document.getElementsByTagName('body')[0].appendChild(s);

    let retries = 0;
    function ready () {
      if (global && global.google ) {
        clearInterval(interval);
        return resolve();
      }
      else if (retries > MAX_RETRIES) {
        return reject();
      }
      retries++;
    }

    const interval = setInterval(ready, INTERVAL);
  });
}

export function visualization () {
  return core().then(() => new Promise(resolve => {
    global.google.load('visualization', '1', {
      packages: [ 'corechart' ],
      callback: () => resolve()
    });      
  }));
}
