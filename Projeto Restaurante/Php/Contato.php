<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // O método POST está sendo usado
    echo "O método POST está autorizado.";

    if(isset($_POST['Nome'], $_POST['Email'], $_POST['Mensagem'])) {
        $name = $_POST['Nome'];
        $email = $_POST['Email'];
        $message = $_POST['Mensagem'];
        $from = 'zerog2044@gmail.com';

        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: Meu Site <$from>\r\n";
        $headers .= "Reply-To: $email\r\n";

        $assunto = "Mensagem do Site";

        if(mail($email, $mensagem, $headers)){
            header('Location: obrigado.php');
        } else {
            echo "Ocorreu um erro ao enviar o email.";
        }
    } else {
        echo "Todos os campos do formulário devem ser preenchidos.";
    }
} else {
    // O método POST não está sendo usado
    echo "O método POST não está autorizado.";
}

?>