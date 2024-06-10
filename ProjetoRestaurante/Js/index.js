$(document).ready(function(){
    var body = $('body');
    var isDarkMode = false; // Define se o modo escuro está ativado ou não

    // Imagens de fundo para o modo claro
    var backgrounds = [
        'url("/imagens/spaghetti.jpg")',
        'url("/imagens/pastaa.png")',
        'url("/imagens/sauce.jpg")'
    ];

    // Imagem de fundo para o modo escuro
    var darkModeBackground = 'url("/imagens/restaurante.png")';

    var current = 0;
    var intervalId; 

    function nextBackground() {
        if (!isDarkMode) {
            current++;
            current = current % backgrounds.length;
            body.css('background-image', backgrounds[current]);
        } else {
            body.css('background-image', darkModeBackground);
        }
    }
    


    body.css('background-image', backgrounds[0]);

    // Alterna entre os modos claro e escuro
    function toggleDarkMode() {
        isDarkMode = !isDarkMode; 
        if (isDarkMode) {
            body.addClass('dark-mode'); 
            body.css('background-image', darkModeBackground);
            clearInterval(intervalId); 
        } else {
            body.removeClass('dark-mode'); 
            current = 0; 
            body.css('background-image', backgrounds[current]);
            intervalId = setInterval(nextBackground, 6500); 
        }
    }

    $('#darkModeToggle').click(function() {
        toggleDarkMode();
    });

    intervalId = setInterval(nextBackground, 6500);
});
