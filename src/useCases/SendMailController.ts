import { Request, Response } from "express";
import { SendMailUseCase } from "./SendMailUseCase";

export class SendMailController {
    constructor(
        private sendMailUseCase: SendMailUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { email, name, subject, message } = request.body;

        try{
            var result = await this.sendMailUseCase.execute({
                email,
                name,
                subject,
                message
            });

            return response.status(200).send(result);
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}