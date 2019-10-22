var text = $('h1').text();

console.log(text);

var ul = $('ul').html()

$('img').css({
    width:'25%',
    height:'25%'
});

/*
https://live.staticflickr.com/2418/2243463214_f32ab004af_b.jpg
*/

$('img:first-of-type').attr('src','https://live.staticflickr.com/2418/2243463214_f32ab004af_b.jpg');

$('img').last().attr('src' , 'https://ichef.bbci.co.uk/news/624/cpsprodpb/B1C9/production/_109031554_mediaitem109031553.jpg');

//$('input').attr('type','color');

$('input').val('barron brock');

var selected = $('select').val();

$('h1').addClass('correct');
// $('h1').removeClass.('correct');

$('li').last().addClass('wrong');
$('li').first().addClass('done');