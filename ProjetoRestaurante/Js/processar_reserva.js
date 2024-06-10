document.addEventListener("DOMContentLoaded", function() {
    // Função para lidar com o envio do formulário de reserva
    function handleReservationFormSubmit(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        // Exibe a mensagem de sucesso
        var successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // Obtém os valores do formulário de reserva
        var data = document.getElementById("data").value;
        var horario = document.getElementById("horario").value;
        var numero_pessoas = document.getElementById("numero_pessoas").value;

        // Atualiza a mensagem de sucesso com a data, horário e número de pessoas selecionados
        successMessage.textContent = "Reserva feita com sucesso para " + data + " às " + horario + " para " + numero_pessoas + " pessoas";

        // Limpa a mensagem de sucesso após alguns segundos
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 4000); // Tempo em milissegundos (3 segundos no exemplo)
    }

    // Adiciona um ouvinte de eventos para o envio do formulário de reserva
    var reservationForm = document.getElementById("ReservaForm");
    if (reservationForm) {
        reservationForm.addEventListener("submit", handleReservationFormSubmit);
    }
});
