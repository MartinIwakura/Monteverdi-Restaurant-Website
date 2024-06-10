document.addEventListener("DOMContentLoaded", function() {
    // Função para lidar com o envio do formulário de contato
    function handleFormSubmit(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        // Exibe a mensagem de sucesso
        var successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
        successMessage.style.fontSize = "24px"; 
        

        // Limpa a mensagem de sucesso após alguns segundos
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 3000); // Tempo em milissegundos (3 segundos no exemplo)
    }

    // Adiciona um ouvinte de eventos para o envio do formulário de contato
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmit);
    }
});
