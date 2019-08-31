/**
 * code in inject.js
 * added "web_accessible_resources": ["injected.js"] to manifest.json
 */
var a = document.createElement('script');
a.src = chrome.extension.getURL('injected.js');
a.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(a);

var b = document.createElement('script');
b.src = chrome.extension.getURL('jquery-3.4.1.min.js');
b.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(b);