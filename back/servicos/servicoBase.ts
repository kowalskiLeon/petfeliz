import { Model } from 'sequelize'

export class ServicoBase<T extends Model>{

    uri: string;

    constructor(uri) {
        this.uri = uri;
    }

    public pegarTodos(req, res) {
        return 'pegar todos'+req +res;
    }

    public criar(req, res) {
        return 'criar'+req +res;
    }

    public atualizar(req, res) {
        return 'atualizar'+req +res;
    }

    public pegar(req, res) {
        return 'pegar'+req +res;
    }

    public excluir(req, res) {
        return 'excluir'+req +res;
    }


}