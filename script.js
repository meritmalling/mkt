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
        $('#contact').css({ 'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0 })
        // $('#bottom').css('height', 800)
    })

    $('#portfolio').on('click', function(){
        $('.portfolio').removeClass('hide').addClass('show');
        $('.about').removeClass('show').addClass('hide');
        $('.resume').removeClass('show').addClass('hide');
        $('#contact').css({ 'padding': '10px', 'position': 'relative', 'bottom': 'auto', 'left': 'auto', 'right': 'auto' })
        // $('#bottom').css('height', 2200)
    })

    $('#resume').on('click', function(){
        $('.resume').removeClass('hide').addClass('show');
        $('.portfolio').removeClass('show').addClass('hide');
        $('.about').removeClass('show').addClass('hide');
        $('#contact').css({ 'padding': '10px', 'position': 'relative', 'bottom': 'auto', 'left': 'auto', 'right': 'auto' })
        // $('#bottom').css('height', 1200)
    })
    $('#home').on('click', function(){
        location.reload();
    })

    // $('.tag').on('click', function(event){
    //     console.log('Clicked Tag')

    //     event.preventDefault();

    //     var currentTag = $('.tagShow');
    //     // console.log('CURRENT',currentTag)
    //     var nextTag = currentTag.next();
    //     // console.log('NEXT',nextTag)

    //     if (nextTag.length === 0){
    //         nextTag = $('.tag h1').first()
    //     }

    //     currentTag.removeClass('tagShow').addClass('tagHide').css('z-index', -10)
    //     nextTag.addClass('tagShow').removeClass('tagHide').css('z-index', 20);
    //     $('.tag').not([currentTag, nextTag]).css('z-index', 1)

    //     console.log('CC Clicked')

    // })

    var count = 1;
    $('html').on('click', function(){
        count ++;
        if (count % 2 == 0){
            $('html').addClass('gray')
        } else {
            $('html').removeClass('gray')
        };
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