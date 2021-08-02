
import * as Sequelize from 'sequelize'
import { Model, DataTypes, BuildOptions } from "sequelize";
import { database} from '../utils/sequelize'


export class PessoaModel extends Model {
    id: number
    nome: string
    sobrenome: string
    nascimento: Date
    email: string
    telefone: string
    senha: string
}

PessoaModel.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sobrenome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nascimento: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telefone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
    tableName: 'pessoa',
    sequelize: database
});

PessoaModel.sync({ force: true }).then(() => console.log("Tabela de Pessoas Criada"));