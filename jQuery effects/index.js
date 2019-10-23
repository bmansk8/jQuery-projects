$('button').click(function(){
    $('div').fadeOut(function(){
        console.log('faded out');
        $(this).remove();
    });  
})

/*
.fadeIn()

.fadeToggle()

.slideDown()

.slideup()

.slideToggle()
*/