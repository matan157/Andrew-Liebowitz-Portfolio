(function() {
    var home = $('#home');
    var about = $('#about');
    var exp = $('#experience');

    home.click(function() {
        $('html, body').animate({
            scrollTop: $("#Home").offset().top
        }, 500);
    });

    about.click(function() {
        $('html, body').animate({
            scrollTop: $("#About").offset().top
        }, 500);
    });

    exp.click(function() {
        $('html, body').animate({
            scrollTop: $("#Experience").offset().top
        }, 500);
    });
})();