import { Model } from "sequelize";
import { ServicoBase } from "../servicos/servicoBase";

export class ControladorBase <F extends Model, T extends ServicoBase<F>>{

    public servicoBase : T;

    constructor(servicoBase){
        this.servicoBase = servicoBase;
    }

    public pegar = () => function(req, res){
        return this.servicoBase.pegar(req, res);
    }
    public atualizar = () => function(req, res){
        return this.servicoBase.atualizar(req, res);
    }
    public criar = () => function(req, res){
        return this.servicoBase.criar(req, res);
    }
    public excluir = () => function(req, res){
        return this.servicoBase.excluir(req, res);
    }


}