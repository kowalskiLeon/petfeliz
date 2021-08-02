
// src/index.ts

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import { Rotas } from './utils/rotas';

class App {
  public app: express.Application;
  public rotas: Rotas = new Rotas();

  constructor() {
    this.app = express();
    this.config();
    this.rotas.routes(this.app);
  }

  private config(): void {
    this.app.use(cors())
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;

// const app = express()
// const port = 3001
// app.use(cors())

// app.get('/', (req, res, next) => {
//     res.json('Hello world')
// })

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}`)
// })