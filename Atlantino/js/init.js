$(function() {
    // close side nav if clicked outside of the nav
    $('body').on('click', function (e) {
        if ($(e.target).closest("#sideNav").length == 0 && !$(e.target).hasClass('open-side-nav')) {
            $('#sideNav').removeClass('opened');
        }
    });

    //single page
    var page = location.hash;

    openPage(page);

    $('#sideNav a').on('click', function () {
        var anchor = $(this).attr('href');
        openPage(anchor);
        $('#sideNav').removeClass('opened');
    });

    function openPage(page) {
        if (!page.length) {
            page = '#home';
        }
        $('#sideNav').find('li').removeClass('active').find('a[href="'+page+'"]').parent().addClass('active');
        $('.partial').hide();
        page = page.substring(1);
        $('body').removeClass().addClass(page).find('#'+page).fadeIn(400);

        if ($('.vertical-slider').is(':visible') && !$('.vertical-slider').hasClass('slick-initialized')) {
            $('.vertical-slider').slick({
                centerMode: true,
                vertical: true,
                slidesToShow: 5,
                slidesToScroll: 5,
                verticalSwiping: true
            });
        }
    }

    // open side nav
    $('.open-side-nav').click(function () {
       $('#sideNav').addClass('opened');
    });

    $('.cssload-container').fadeOut(400);
});