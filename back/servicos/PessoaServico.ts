import { PessoaModel } from "../entidades/pessoa";

export class PessoaServico {

    constructor() {
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

    public login(req, res) {
        console.log(req.query);
        PessoaModel.findOne<PessoaModel>({
            where: {
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

    public async criar(req, res) {
        var pessoa = req.body.params;
        console.log(pessoa);
        // var p: PessoaModel = new PessoaModel();
        // p.nome = pessoa.nome;
        // p.sobrenome = pessoa.sobrenome;
        // p.nascimento = pessoa.nascimento;
        // p.email = pessoa.email;
        // p.telefone = pessoa.senha;
        // p.senha = pessoa.senha;
        // console.log(p)
        await PessoaModel.create<PessoaModel>({
            PessoaModel: {
                nome: req.body.params.nome,
                sobrenome: req.body.params.sobrenome,
                nascimento: req.body.params.nascimento,
                email: req.body.params.email,
                telefone: req.body.params.senha,
                senha: req.body.params.senha
            }
        })
            .then((pessoa) => {
                console.log(pessoa);
                res.send(pessoa);
            })
            .catch((err: Error) => {
                console.log(err);
                res.status(500).json(err);
            });
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
        const idPessoa: number = req.params.id;
        PessoaModel.destroy<PessoaModel>({
            where: {
                id: idPessoa
            }
        })
            .then((resposta) => {
                res.send(resposta);
            })
            .catch((err: Error) => res.status(500).json(err));
    }
}