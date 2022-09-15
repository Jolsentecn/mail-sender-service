import { app } from './app';
import { sendMailRouter } from "./routes/sendmail.routes";

app.use("/sendMail", sendMailRouter);

app.listen(3333, () => {
    console.log(`Server started at http://localhost:3333`);
});