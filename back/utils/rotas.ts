// lib/config/routes.ts
import { Request, Response } from "express";
import { AnimalControlador } from "../controladores/AnimalControlador";
import { PessoaControlador } from "../controladores/PessoaControlador";


export class Rotas {
    public pessoaControlador: PessoaControlador = new PessoaControlador();
    public animalControlador: AnimalControlador = new AnimalControlador();

    constructor() {
    }

    public routes(app): void {
        app.route("/pessoa")
            .get((req, res) => this.pessoaControlador.pegarTodos(req, res))
            .post((req, res) => this.pessoaControlador.criar(req, res));
        app.route("/pessoa/:id")
            .get((req, res) => this.pessoaControlador.pegar(req, res))
            .put((req, res) => this.pessoaControlador.atualizar(req, res))
            .delete((req, res) => this.pessoaControlador.excluir(req, res));
        app.route("/login")
            .get((req, res) => this.pessoaControlador.login(req, res));

        app.route("/animal")
            .get((req, res) => this.animalControlador.pegarTodos(req, res))
            .post((req, res) => this.animalControlador.criar(req, res));
        app.route("/animal/:id")
            .get((req, res) => this.animalControlador.pegar(req, res))
            .put((req, res) => this.animalControlador.atualizar(req, res))
            .delete((req, res) => this.animalControlador.excluir(req, res));
    }
}