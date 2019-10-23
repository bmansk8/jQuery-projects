$('h1').click( () => {
    console.log('h1 clicked');
})

$('button').click( function() {
    $(this).css('background','pink')
});

//$(this) is the jQuery version of this
//since .css is a jQuery thing u must use the jQuery version of this

$('input').keypress(function(event){
    if(event.which === 13){
        console.log('u hit enter');
    }
});

$('p').on('click',function(){
    $(this).css('color','red');
})

$('button').on('mouseenter', function(){
    $(this).css('font-weight','bold')
})

$('button').on('mouseleave', function(){
    $(this).css('font-weight','normal')
})

//click() only adds listeners for any current elements on the page
//on() will add listeners for any current or future element