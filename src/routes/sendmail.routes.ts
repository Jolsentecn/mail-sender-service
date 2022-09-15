import express, { Request, Response } from "express";
import { sendMailController } from "../useCases/SendMail/index";

export const sendMailRouter = express.Router();

sendMailRouter.use(express.json());

sendMailRouter.post('/', (request, response) => {
    return sendMailController.handle(request, response);
});
