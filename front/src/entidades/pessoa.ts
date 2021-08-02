

export class Pessoa{
    id: number
    nome: string
    sobrenome: string
    nascimento: Date
    email: string
    telefone: string
    senha: string

    constructor(id?, nome?, sobrenome?, nascimento?, email?, telefone?, senha?){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nascimento = nascimento;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
    }
}