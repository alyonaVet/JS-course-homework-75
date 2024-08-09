import express from 'express';
import {Request, Response} from 'express';
import cors, {CorsOptions} from 'cors';

import {vigenereCipher} from "./vigenereCipher";

const app = express();
const port = 8000;

const whitelist = ['http://localhost:5173'];
const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (origin && whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};
app.use(cors(corsOptions));
app.use(express.json());

app.post('/encode', (req: Request, res: Response) => {
    const {password, message} = req.body;

    const encodedMessage = vigenereCipher(message, password, true);
    return res.send({"encoded": encodedMessage});
});

app.post('/decode', (req: Request, res: Response) => {
    const {password, message} = req.body;

    const decodedMessage = vigenereCipher(message, password, false);
    return res.send({"decoded": decodedMessage});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
