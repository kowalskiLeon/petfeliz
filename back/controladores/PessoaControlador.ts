import { Request, Response } from "express";
import { PessoaModel } from "../entidades/pessoa";
import { PessoaServico } from "../servicos/PessoaServico";

export class PessoaControlador{

    private pessoaService: PessoaServico = new PessoaServico();

    constructor() {
        this.pessoaService = new PessoaServico();
    }

    public login(req, res) {
        
        this.pessoaService.login(req, res);
    }

    public pegarTodos(req, res) {
        var result = this.pessoaService.pegarTodos(req, res);
        return result;
    }
    public pegar(req, res) {
        return this.pessoaService.pegar(req, res);
    }
    public atualizar(req, res) {
        return this.pessoaService.atualizar(req, res);
    }
    public criar(req, res) {
        return this.pessoaService.criar(req, res);
    }
    public excluir(req, res) {
        return this.pessoaService.excluir(req, res);
    }

}