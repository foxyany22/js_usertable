// Tabs Controller

jQuery(function($) {
    $(".tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tab-content>.tab-content-alone").removeClass("active");
        $(".tab-content>.tab-content-alone").eq(index).addClass("active");
    });
});