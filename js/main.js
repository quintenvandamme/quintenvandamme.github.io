   
function loadScrip(file) {
 
    let script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
 
    document.getElementsByTagName('head').item(0).appendChild(script);
 
}

function loadStyle(src) {
    return new Promise(function (resolve, reject) {
        let link = document.createElement('link');
        link.href = src;
        link.rel = 'stylesheet';

        link.onload = () => resolve(link);
        link.onerror = () => reject(new Error(`Style load error for ${src}`));

        document.head.append(link);
    });
}
// header
loadScrip('css/header.css');
loadScrip('js/header.js');

loadScrip('https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js');
loadStyle('css/button.css');
loadScrip('js/button.js');