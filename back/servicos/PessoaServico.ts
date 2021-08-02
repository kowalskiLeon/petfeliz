import { PessoaModel } from "../entidades/pessoa";
import { ServicoBase } from "./servicoBase";

export class PessoaServico extends ServicoBase<PessoaModel>{
    
    constructor(){
        super('pessoa');
    }
}