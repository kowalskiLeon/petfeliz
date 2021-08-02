import {Request, Response} from "express";
import { PessoaModel } from "../entidades/pessoa";
import { PessoaServico } from "../servicos/PessoaServico";
import { ControladorBase } from "./ControladorBase";

export class PessoaControlador extends ControladorBase<PessoaModel, PessoaServico>{

    private pessoaService: PessoaServico = new PessoaServico();

    constructor(){
        super(new PessoaServico());
        this.servicoBase = this.pessoaService;
    }

}