$(document).ready(function(){
    console.log('Running')

    $("#bottom").height($(document).height() - $('#top').height());

    $('.tlt').textillate({
        selector: '.texts',
        loop: true,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true
    });

    $('#about').on('click', function(){
        $('.about').removeClass('hide').addClass('show');
        $('.portfolio').removeClass('show').addClass('hide');
        $('.resume').removeClass('show').addClass('hide');
    });

    $('#portfolio').on('click', function(){
        $('.portfolio').removeClass('hide').addClass('show');
        $('.about').removeClass('show').addClass('hide');
        $('.resume').removeClass('show').addClass('hide');
    });

    $('#resume').on('click', function(){
        $('.resume').removeClass('hide').addClass('show');
        $('.portfolio').removeClass('show').addClass('hide');
        $('.about').removeClass('show').addClass('hide');
    });

    $('#home').on('click', function(){
        location.reload();
    });

    var count = 1;
    $('html').on('click', function(){
        count ++;
        if (count % 2 === 0){
            $('#top').css({'background-color':'black', 'color':'white'});
            $('#bottom').css({'background-color':'white', 'color':'black'});
            $('embed').addClass('gray');
            $('#home').css({'border-color':'white'});
            $('.tlt').css({'border-color':'black'});
        } else {
            $('#top').css({'background-color':'#FAC6BF', 'color':'#C28C57'});
            $('#bottom').css({'background-color':'#0A2531', 'color':'#C28C57'});
            $('embed').removeClass('gray');
            $('#home').css({'border-color':'#C28C57'});
            $('.tlt').css({'border-color':'#C28C57'});

        }
    });

    // $('#next').on('click', function(event){

    //     event.preventDefault();

    //     var currentImage = $('.show');
    //     var nextImage = currentImage.next();

    //     if (nextImage.length === 0){
    //         nextImage = $('.work img').first()
    //     }

    //     currentImage.removeClass('show').addClass('hide').css('z-index', -10)
    //     nextImage.addClass('show').removeClass('hide').css('z-index', 20);
    //     $('.carousel').not([currentImage, nextImage]).css('z-index', 1)
    // });


    // $('#previous').on('click', function(event){

    //     event.preventDefault();

    //     var currentImage = $('.showImg');
    //     var nextImage = currentImage.prev();

    //     if (nextImage.length === 0){
    //         nextImage = $('.work img').last()
    //     }

    //     currentImage.removeClass('showImg').addClass('hideImg').css('z-index', -10)
    //     nextImage.addClass('showImg').removeClass('hideImg').css('z-index', 20);
    //     $('.carousel').not([currentImage, nextImage]).css('z-index', 1)
    // });


});