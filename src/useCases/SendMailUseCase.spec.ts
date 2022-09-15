import { IMailProvider, IMessage } from "../providers/IMailProvider";
import { SendMailUseCase } from "./SendMailUseCase";

const mailProvider: jest.Mocked<IMailProvider> = {
    sendMail: jest.fn(),
}

describe('SendMailUseCase', () => {

    it('should run without errors?', async () => {
        const sut = new SendMailUseCase(mailProvider);

        await sut.execute({ email: "", name: "", message: "", subject: "" });
    });
});