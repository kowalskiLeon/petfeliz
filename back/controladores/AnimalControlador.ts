
import { AnimalServico } from "../servicos/AnimalServico";

export class AnimalControlador{

    private AnimalService: AnimalServico = new AnimalServico();

    constructor() {
        this.AnimalService = new AnimalServico();
    }

    public pegarTodos(req, res) {
        var result = this.AnimalService.pegarTodos(req, res);
        return result;
    }
    public pegar(req, res) {
        return this.AnimalService.pegar(req, res);
    }
    public atualizar(req, res) {
        return this.AnimalService.atualizar(req, res);
    }
    public criar(req, res) {
        return this.AnimalService.criar(req, res);
    }
    public excluir(req, res) {
        return this.AnimalService.excluir(req, res);
    }

}