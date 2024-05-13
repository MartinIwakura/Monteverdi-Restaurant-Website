$(document).ready(function(){
    var header = $('body');

    var backgrounds = [
        'url("/imagens/spaghetti.jpg")',
        'url("/imagens/pastaa.png")',
        'url("/imagens/sauce.jpg")'
    ];

    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }

    setInterval(nextBackground, 6500);

    header.css('background-image', backgrounds[0]);
});