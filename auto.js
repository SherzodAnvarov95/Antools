$('.ask').on('click', function () {
    
    $('.ask').not(this).removeClass('active').next().slideUp(500)
    $(this).toggleClass('active').next().slideToggle(500)
    
})