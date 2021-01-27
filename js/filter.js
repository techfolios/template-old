var $btns = $('.filterButton').click(function () {
    if (this.id == 'all'){
        $('#parent2 > div').fadeIn(450);
    }else{
        var $el = $('.' + this.id).fadeIn(450);
        $('#parent2 > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})

