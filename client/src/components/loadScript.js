const loadScript = (url, cb) => {
  let script = document.createElement("script");
  script.type = "text/javascript";


  if (script.readyState) {
    script.onReadyStateChange = () => {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onReadyStateChange = null;
        cb();
      }
    }
  } else {
    script.onLoad = () => cb();
  }

  script.src = url;
  document.getElementByTagName("head")[0],appendChild(script);
}
