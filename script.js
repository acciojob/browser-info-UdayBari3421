//your JS code here. If required.
let domItem = document.getElementById("browser-info");

let agent = navigator.userAgent;
let app = navigator.appName;
let appVersion = navigator.appVersion;

domItem.innerHTML = agent + app + appVersion; 