$(document).ready(function(){
    console.log('Running')

    var count = 1;

    $('html').on('click', function(){
        count ++;
        if (count % 2 == 0){
            $('html').addClass('gray')
        } else {
            $('html').removeClass('gray')
        };
    });

    $('#next').on('click', function(event){

        event.preventDefault();

        var currentImage = $('.show');
        var nextImage = currentImage.next();

        if (nextImage.length === 0){
            nextImage = $('.work img').first()
        }

        currentImage.removeClass('show').addClass('hide').css('z-index', -10)
        nextImage.addClass('show').removeClass('hide').css('z-index', 20);
        $('.carousel').not([currentImage, nextImage]).css('z-index', 1)
    });


    $('#previous').on('click', function(event){

        event.preventDefault();

        var currentImage = $('.show');
        var nextImage = currentImage.prev();

        if (nextImage.length === 0){
            nextImage = $('.work img').last()
        }

        currentImage.removeClass('show').addClass('hide').css('z-index', -10)
        nextImage.addClass('show').removeClass('hide').css('z-index', 20);
        $('.carousel').not([currentImage, nextImage]).css('z-index', 1)
    });
});