import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer  from 'nodemailer';

export class MailtrapMailProvider implements IMailProvider {
   private transporter;
    constructor() {
         this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "2aea1e3601baf1",
              pass: "d659fc32164404"
            }
         })
   }
    async sendMail(message: IMessage): Promise<void> {
       const html = `<h1>Serviço de email </h1> <br /> <p>${message.body}</p>`
       await this.transporter.sendMail({
        to: {
            name: message.to.name,
            address: message.to.email,
        },
        from: {
            name: message.from.name,
            address: message.from.email,
        },
        subject: message.subject,
        html: html, 
       })
   } 
}