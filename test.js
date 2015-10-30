$(document).ready(function(){
    console.log('Running')

    var scroll = function(){
        $('html, body').animate({
            scrollTop: $("#buffer").offset().top
        }, 500);
    };

    $('.tlt').textillate({
        selector: '.texts',
        loop: true,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true
    });

    $('#about').on('click', function(){
        $('.about').removeClass('hide').addClass('show');
        $('.work').removeClass('show').addClass('hide');
        $('.resume').removeClass('show').addClass('hide');
        $('#up').show()
        scroll();
        $('#up').removeClass('hide');
    });

    $('#portfolio').on('click', function(){
        $('.work').removeClass('hide').addClass('show');
        $('.about').removeClass('show').addClass('hide');
        $('.resume').removeClass('show').addClass('hide');
        scroll();
        $('#up').removeClass('hide');
    });

    $('#resume').on('click', function(){

    });

    $('#home').on('click', function(){
        location.reload();
    });

    $('#up').on('click', function(){
        $('.work').removeClass('show').addClass('hide');
        $('.about').removeClass('show').addClass('hide');
        $('#up').addClass('hide');
    });


// Hover Icons
    $('#sudokucircle').on('mouseover', function(){
        $('.piece').hide()
        $('#sudokutext').removeClass('hide').show()
    });
    $('#quickcircle').on('mouseover', function(){
        $('.piece').hide()
        $('#quicktext').removeClass('hide').show()
    });
    $('#myhivecircle').on('mouseover', function(){
        $('.piece').hide()
        $('#hivetext').removeClass('hide').show()
    });
    $('#mesacircle').on('mouseover', function(){
        $('.piece').hide()
        $('#mesatext').removeClass('hide').show()
    });
    $('#chasecircle').on('mouseover', function(){
        $('.piece').hide()
        $('#chasetext').removeClass('hide').show()
    });


});