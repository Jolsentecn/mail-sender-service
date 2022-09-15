# Serviço para envio de e-mails 

## Funcionalidades
- Recebe um post com o as informações necessarias para enviar um e-mail
- Envia o e-mail com um layout simples html
- Recebe o dados de novos usuarios via comunicação assincrona (Redis)
- Guarda os e-mails e os nomes de todos os usuarios registrados (MongoDb)
- Criar uma thread que dispare os e-mails recebidos via ``POST`` com intervalos de 5 minutos 

## Como utilizar

1. Envie um ``POST`` para o seguinte endpoint: ``/sendmail`` com o seguinte objeto:
```
{
    "subject": "Assunto do e-mail",
    "message": "Corpo do e-mail"
}
```
Retorno:
```
200 OK
```
