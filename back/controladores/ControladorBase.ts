import { Model } from "sequelize";
import { ServicoBase } from "../servicos/servicoBase";

export class ControladorBase <F extends Model, T extends ServicoBase<F>>{

    public servicoBase : T;

    constructor(servicoBase){
        this.servicoBase = servicoBase;
    }

    public pegarTodos(req, res){
        var result = this.servicoBase.pegarTodos(req, res);
        return result;
    }
    public pegar(req, res){
        return this.servicoBase.pegar(req, res);
    }
    public atualizar(req, res){
        return this.servicoBase.atualizar(req, res);
    }
    public criar(req, res){
        return this.servicoBase.criar(req, res);
    }
    public excluir(req, res){
        return this.servicoBase.excluir(req, res);
    }


}