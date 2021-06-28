jQuery(window).on('scroll', function () {
　if (7000 < jQuery(this).scrollTop()) {
　　jQuery('#box9').addClass('change-color');
　} else {
　　jQuery('#box9').removeClass('change-color');
　}
});
