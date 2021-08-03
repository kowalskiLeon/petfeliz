
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