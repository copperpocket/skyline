window.onload = function() {
    var el = document.createElement('script');
    el.src = "Scripts/script.js?nocache=" + (new Date()).getTime();
    document.head.appendChild(el);

    console.log('nocache.js executed');
}
