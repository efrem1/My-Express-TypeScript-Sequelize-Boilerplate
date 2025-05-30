import express from 'express';


const app = express();

app.use(express.json());

app.use('/',(req: express.Request, res: express.Response) => {
    res.json({name:"Homepage"});
});

export default app;
