import express, { Request, Response } from "express";
import getData from './getData'

const app: express.Application = express();

app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.static('public'))


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Express + TypeScript + Linting");
});

app.use('/api/v1', getData)

export default app;
