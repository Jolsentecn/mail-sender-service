import { IMailProvider } from "../providers/IMailProvider";
import { ISendMailRequestDTO } from "./SendMailDTO";

export class SendMailUseCase {
    constructor(
        private sendMailProvider: IMailProvider
    ){}
    async execute(data: ISendMailRequestDTO): Promise<void>{
        await this.sendMailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do Meu App',
                email: '3e2f45216e-af6a27@inbox.mailtrap.io',
            },
            subject: data.subject,
            body: data.message
        });
    }
}