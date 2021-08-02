import { Sequelize } from "sequelize";

const db = 'petfeliz'
const username = 'root'
const password = '642138983'

export const database = new Sequelize({
  database: 'petfeliz',
  username: 'root',
  password: '642138983',
  dialect: "mysql",
  port: 3306
});

database.authenticate()