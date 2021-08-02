// lib/config/routes.ts
import { Request, Response } from "express";
import { PessoaControlador } from "../controladores/PessoaControlador";


export class Rotas {
    public pessoaControlador: PessoaControlador = new PessoaControlador();

    constructor() {
    }

    public routes(app): void {
        app.route("/pessoa")
            .get(this.pessoaControlador.pegar)
            .put(this.pessoaControlador.atualizar);
        app.route("/pessoa/:id")
            .get(this.pessoaControlador.pegar)
            .put(this.pessoaControlador.atualizar)
            .delete(this.pessoaControlador.excluir);
        // app.route("/teste")
        // .get(
        //     () => console.log('teste')
        // )
    }
}