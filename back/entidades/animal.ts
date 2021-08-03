
import * as Sequelize from 'sequelize'
import { Model, DataTypes, BuildOptions } from "sequelize";
import { database} from '../utils/sequelize'


export class AnimalModel extends Model {
    id: number
    nome: string
    idade: number
    descricao: string
    tipo: string
    contato: string
    idPessoa: number

}

export interface Animal {
    id: number
    nome: string
    idade: number
    descricao: string
    tipo: string
    contato: string
    idPessoa: number
}



AnimalModel.init(
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
        idade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tipo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contato: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idPessoa: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    }, {
    tableName: 'animal',
    sequelize: database
});

AnimalModel.sync({ force: false }).then(() => console.log("Tabela de Animais Criada"));