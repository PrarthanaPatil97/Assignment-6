$(function () {
    $('.accordion').on('click', '.accordion-control', function (e) {
        console.log("event data", e);
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.accordion-panel')
            .not('animated')
            .slideToggle(2000);
    });
});