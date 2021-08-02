import { PessoaModel } from "../entidades/pessoa";
import { ServicoBase } from "./servicoBase";

export class PessoaServico extends ServicoBase<PessoaModel>{
    
    constructor(){
        super('pessoa');
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

    public login(req, res){
        console.log(req.query);
        PessoaModel.findOne<PessoaModel>({
            where :{
                email: req.query.email,
                senha: req.query.senha
            }
        })
            .then((pessoa: PessoaModel) => {
                res.send(pessoa);
            })
            .catch((err: Error) => {
                res.send(err);
            });
    }
}