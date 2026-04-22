const style = document.createElement('style');
style.innerHTML = `
  /* Target common ad containers and frames */
  iframe, 
  ins.adsbygoogle, 
  div[id^="google_ads"], 
  div[class*="ad-box"],
  .ad-unit { 
    display: none !important; 
  }
`;
document.head.appendChild(style);
