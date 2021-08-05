import { Animal, AnimalModel } from "../entidades/animal";
import fs from 'fs'




export class AnimalServico {

    constructor() {
    }

    public pegarTodos(req, res) {
        AnimalModel.findAll<AnimalModel>({})
            .then((Animals: Array<AnimalModel>) => {
                console.log(Animals)
                res.send(Animals)
            })
            .catch((err: Error) => {
                res.send(err);
            });
    }

    public async criar(req, res) {
        var Animal = req.body.params;
        var imagem = Animal.imagem;
        var name = Date.now();
        fs.writeFileSync( ''+name , imagem +'');
        const params = {
            nome: Animal.nome,
            idade: Animal.idade,
            descricao: Animal.descricao,
            tipo: Animal.tipo,
            contato: Animal.contato,
            idPessoa: Animal.idPessoa,
            imagem: fs.readFileSync(''+name , imagem)
        }
        var image = params.imagem;
        AnimalModel.create<AnimalModel>(params)
            .then((node: AnimalModel) => {
                res.status(201).json(node)
            })
            .catch((err: Error) => {
                console.log(err);
                res.status(500).json(err)
            });

    }

    public atualizar(req, res) {
        return 'atualizar' + req + res;
    }

    public pegar(req, res) {
        const id: number = req.params.id;
        AnimalModel.findByPk<AnimalModel>(id)
            .then((Animal: AnimalModel | null) => {

                if (Animal) {
                    res.send(Animal);
                } else {
                    res.status(404).json({ errors: ["Não encontrado"] });
                }
            })
            .catch((err: Error) => {
                console.log(err);
                res.status(500).json(err)
            });
    }

    public excluir(req, res) {
        const idAnimal: number = req.params.id;
        AnimalModel.destroy<AnimalModel>({
            where: {
                id: idAnimal
            }
        })
            .then((resposta) => {
                res.send(resposta);
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public pesquisar(req, res) {

        var nome = req.query.nomeAnimal
        var idade = req.query.idadeAnimal
        var tipo = req.query.tipoAnimal

        AnimalModel.findAll<AnimalModel>({
            where: {
                nome: nome,
                idade: idade,
                tipo: tipo
            }
        })
            .then((Animals: Array<AnimalModel>) => {
                //console.log(Animals)
                res.send(Animals)
            })
            .catch((err: Error) => {
                res.send(err);
            });
    }

    
}