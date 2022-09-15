import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SendMailController } from "./SendMailController";
import { SendMailUseCase } from "./SendMailUseCase";

const mailtrapProvider = new MailtrapMailProvider();

const sendMailUseCase = new SendMailUseCase(
    mailtrapProvider
);

const sendMailController = new SendMailController(
    sendMailUseCase
);

export { sendMailUseCase, sendMailController  }
