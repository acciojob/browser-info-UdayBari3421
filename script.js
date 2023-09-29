//your JS code here. If required.
let inner = document.getElementById("browser-info");


let str = "You are using"
let app = " " + navigator.appName + " ";
let av = navigator.appVersion;
let agent = navigator.userAgent;
let ver = "version ";

inner.innerHTML = str + app + ver + av + agent;