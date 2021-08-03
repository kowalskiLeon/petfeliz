import { Animal, AnimalModel } from "../entidades/animal";

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
        const params: Animal = Animal;
        console.log(params);
        AnimalModel.create<AnimalModel>(params)
            .then((node: AnimalModel) => res.status(201).json(node))
            .catch((err: Error) =>{
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
            .catch((err: Error) =>{
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
}