var body = document.querySelector('body');
var opacity = 0;
var loaderType = document.getElementById('preloaderScript').getAttribute('data-type');

if(loaderType == 'min') {
    window.addEventListener('load', function() {
        setInterval(function() {
            if(opacity < 1) {
                document.querySelector('body').style.opacity = opacity;
                opacity += 0.06;
            }else {
                document.querySelector('body').style.opacity = 1;
            }
        }, 30)
    })   
}else if(loaderType == 'full') {
    document.querySelector('body').style.opacity = 1;
    document.querySelector('body').classList.add('is--preloader')

    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('preloader').classList.add('is--finish')
        }, 10)
        setTimeout(function() {
            document.querySelector('body').classList.remove('is--preloader')
        }, 1000)
    })

}