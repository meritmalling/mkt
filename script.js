document.addEventListener('DOMContentLoaded', function(){
    console.log('Running')

    var HTML = document.querySelector('html');
    var count = 0;

    HTML.addEventListener('click', function(){
        count ++;
        if (count % 2 == 0){
            HTML.classList.add('gray');
        } else {
            HTML.classList.remove('gray');
        };
    });

});

$(function() {
    $('.jcarousel').jcarousel({
        animation: 'slow'
    });
});