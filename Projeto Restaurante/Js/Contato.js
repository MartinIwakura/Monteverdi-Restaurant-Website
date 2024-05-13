const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

// Configuração do nodemailer 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu_email@gmail.com',
    pass: 'sua_senha'
  }
});

// Middleware para analisar o corpo da requisição
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para lidar com a página inicial
app.get('/', (req, res) => {
  res.send('Página inicial');
});

// Rota para lidar com o envio do formulário
app.post('/Js/Contato.js', (req, res) => {
  console.log('Requisição POST recebida em /Js/Contato.js');

  // Extrai os dados do formulário
  const { name, email, message } = req.body;

  // Configura as opções do e-mail
  const mailOptions = {
    from: 'zerog2044@gmail.com',
    to: 'zerog2044@gmail.com',
    subject: 'Novo contato pelo formulário de contato',
    text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
  };

  // Envia o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Erro ao enviar o e-mail');
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.send('E-mail enviado com sucesso');
    }
  });
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log('Servidor iniciado na porta 3000');
});
