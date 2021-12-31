import * as express from 'express';
import { Request, Response } from 'express';
// const express = ('express')
const app = express();
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
const {
    PORT = 3000,
} = process.env;

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hello world',
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:`+PORT)
})