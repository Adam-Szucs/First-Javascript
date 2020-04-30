// Itt kezdődik a jQuery

$('h1').html('Ezt már a <em>JavaScript</em> csinálja!');
$('h2').toggleClass('blue');



function myFunction() {
   if ($('p').length < 5) {
    $('main').append("<p>Appended paragraph</p>");    
}   else {
    console.log('No more paragraphs allowed!')
}

    $('p').css('border', '2px solid green');
    $('p').css('padding', '20px');
    
}

myFunction();
myFunction();

$('#add').click(myFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});

let colors =["orange", "yellow", "blue", "lime", "magenta"];

colors.forEach(function (color)  {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color)
});



/*
$("#box-container").append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$("#box-container").append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$("#box-container").append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$("#box-container").append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$("#box-container").append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);
*/
// forEach() !!!! 

console.log('Script file is loaded');