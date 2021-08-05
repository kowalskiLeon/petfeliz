// lib/config/routes.ts
import { Request, Response } from "express";
import { AnimalControlador } from "../controladores/AnimalControlador";
import { PessoaControlador } from "../controladores/PessoaControlador";
import multer from 'multer';
import path from 'path'


export class Rotas {
    public pessoaControlador: PessoaControlador = new PessoaControlador();
    public animalControlador: AnimalControlador = new AnimalControlador();


    storage = multer.diskStorage(
        {
            destination: (req, file, cb) => {
                cb(null, '../imgs')
            },
            filename: (req, file, cb) => {
                console.log(file)
                cb(null, Date.now() + path.extname(file.originalName))
            }
        }

    )
    upload = multer({ storage: this.storage })

    constructor() {
    }

    public routes(app): void {
        app.route("/pessoa")
            .get((req, res) => this.pessoaControlador.pegarTodos(req, res))
            .post((req, res) => this.pessoaControlador.criar(req, res));
        app.route("/pessoa/:id")
            .get((req, res) => this.pessoaControlador.pegar(req, res))
            .put((req, res) => this.pessoaControlador.atualizar(req, res))
            .delete((req, res) => this.pessoaControlador.excluir(req, res));
        app.route("/login")
            .get((req, res) => this.pessoaControlador.login(req, res));

        app.route("/animal")
            .get((req, res) => this.animalControlador.pegarTodos(req, res))
            .post((req, res) => {
                this.upload.single(req.body.params.image), (req1, res1) =>{
                    try{
                        console.log('yay---------------------')
                    }catch(error){
                        console.log(error);
                        res.send(error);
                    }
                }
                this.animalControlador.criar(req, res);
            });
        app.route("/animal/:id")
            .get((req, res) => this.animalControlador.pegar(req, res))
            .put((req, res) => this.animalControlador.atualizar(req, res))
            .delete((req, res) => this.animalControlador.excluir(req, res));
        app.route("/pesquisa")
            .get((req, res) => this.animalControlador.pesquisar(req, res));
    }
}