import { Model } from 'sequelize'
import { PessoaModel } from '../entidades/pessoa';
import { Request, Response } from "express";

export class ServicoBase<T extends Model>{

    uri: string;

    constructor(uri) {

        this.uri = uri;
    }

    public pegarTodos(req, res) {
        PessoaModel.findAll<PessoaModel>({})
            .then((pessoas: Array<PessoaModel>) => {
                res.send(pessoas)
            })
            .catch((err: Error) => {
                res.send(err);
            });
    }

    public criar(req, res) {
        return 'criar' + req + res;
    }

    public atualizar(req, res) {
        return 'atualizar' + req + res;
    }

    public pegar(req, res) {
        const id: number = req.params.id;
        PessoaModel.findByPk<PessoaModel>(id)
            .then((pessoa: PessoaModel | null) => {
                if (pessoa) {
                    res.send(pessoa);
                } else {
                    res.status(404).json({ errors: ["Não encontrado"] });
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public excluir(req, res) {
    return 'excluir' + req + res;
}


}