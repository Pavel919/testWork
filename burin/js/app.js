$(document).ready(function(){
    $('.islider').slick({
        prevArrow: '.arrow-l',
        nextArrow: '.arrow-r',
        autoPlay: true,
        dots: true
    });


    $('.object-slider').slick({
        prevArrow: '.btn-p',
        nextArrow: '.btn-n',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true, /*задает свою ширину слик слайдера*/
    })


    $(document).ready(function(){

    var show = true;
    var countbox = ".resultat";

    $(window).on("scroll load resize", function(){
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){

            $('.numnum').spincrement({
                thousandSeparator: "",
                duration: 3500
            });

            show = false;
        }
    });

});

    $(window).scroll(function(){
        if ($(this).scrollTop() > $('#headerC').innerHeight()){
            $('.navbar').addClass('fixed');
            $('#headerC').addClass('none');
            }
            else{
            $('.navbar').removeClass('fixed');
            $('#headerC').removeClass('none');
            }
    });

    $(document).ready(function(){
        $('#calcItem1, #calcItem2, #calcItem3, #calcItem4, #calcItem5, #calcItem6').click(function(){
            if ($('.cif2').is(':visible')) {
                $('.cif2').hide('slow(3500)');
               }
               else {
              $('.cif2').show('slow(3500)');
               }
        });
        $('#dloadBtn').click(function(){
            if($('.cif4').is(':visible')) {
                $('.cif4').hide('slow(3500)');
               }
               else {
              $('.cif4').show('slow(3500)');
               }
        });
        $('#pro, #max, #lux').click(function(){
            if($('.cif5').is(':visible')) {
                $('.cif5').hide('slow(3500)');
               }
               else {
              $('.cif5').show('slow(3500)');
               }
        });
    });
})
