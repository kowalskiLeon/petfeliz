import React from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, Container, Grid, TextField } from "@material-ui/core";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Pessoa } from "../entidades/pessoa";
import Axios from "axios";
import { variableDeclarator } from "@babel/types";

var pessoa: Pessoa = new Pessoa();
var senhaConfirmacao: string;


function validacao() {
    if (!pessoa.nome) {
        console.log('nome invalido')
        return false;
    }
    if (!pessoa.telefone) {
        console.log('telefone invalido')
        return false;
    }
    if (!pessoa.email) {
        console.log('email invalido')
        return false;
    }
    if (!pessoa.nascimento) {
        console.log('nascimento invalido')
        return false;
    }
    if (!pessoa.sobrenome) {
        console.log('sobrenome invalido')
        return false;
    }
    if (!pessoa.senha) {
        console.log('senha invalido')
        return false;
    }
    if (!senhaConfirmacao) {
        console.log('senha2 invalido')
        return false;
    }
    if (senhaConfirmacao !== pessoa.senha) {
        console.log('senhas diferentes')
        return false;
    }
    return true;
}

const TelaCadastro = (props) => {
    const CorpoCadastro = styled.div`
    width:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    
  `;

    const Titulo = styled.h2`
    text-align: left;
    margin-left: 16px;
  `;

    const Informacoes = styled.div`
    border: 1px solid transparent;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #e9d4f4, #f2e2ff);
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    padding: 12px;
  `;

    const Button = styled.button`
    margin: 2em;
    font-size: 1em;
    width: 8em;
    border: 1px solid transparent;
    border-radius: 48px;
    background-color:#6788e1;
    color: white;
    padding: 0.6em;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background-color:#cb6eff;
        
        transition: 0.3s;
    }
    
  `;
    const WarningButton = styled.button`
    margin: 2em;
    font-size: 1em;
    width: 8em;
    border: 1px solid transparent;
    border-radius: 48px;
    background-color:#ee5f5f;
    color: white;
    padding: 0.6em;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background-color:#ff3434;
        
        transition: 0.3s;
    }`


    const useStyles = makeStyles(theme => ({
        boxDiv: {
            textAlign: 'left',

        },
        fullscreen: {
            margin: '0px',
            padding: '0px',
            width: '100vw',
            backgroundColor: '#e7deff'
        },

        icon: {
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '36px',
            height: '36px',
            color: '#7866b0',
            marginLeft: '48px'
        },

        centro: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },

        campoEntrada: {
            width: '60%'
        }

    }));

    const classes = useStyles();



    const salvar = (e) => {
        e.preventDefault();
        if (validacao() === true) {
            Axios.post('http://localhost:3001/pessoa', {
                params: {
                    nome: pessoa.nome,
                    sobrenome: pessoa.sobrenome,
                    telefone: pessoa.telefone,
                    email: pessoa.email,
                    nascimento: pessoa.nascimento,
                    senha: pessoa.senha
                }
            })
                .then(function (response) {
                    if (response.data) {
                        props.mudarUsuario(new Pessoa(response.data.id, response.data.nome, response.data.sobrenome));
                        props.history.push('/home');
                    }
                });
        } else {
            console.log('falhou')
        }
    }

    const atualizar = (e) => {
        e.preventDefault();
        if (validacao() === true) {
            Axios.put('http://localhost:3001/pessoa', {
                params: {
                    pessoaModel: pessoa
                }
            })
                .then(function (response) {
                    if (response.data) {
                        props.mudarUsuario(new Pessoa(response.data.id, response.data.nome, response.data.sobrenome));
                        props.history.push('/home');
                    }
                });
        } else {
            console.log('falhou')
        }
    }


    return (
        <CorpoCadastro>
            <Container maxWidth={false} className={classes.fullscreen}>
                <Box mt={10} ml={3} className={classes.boxDiv}>
                    <Grid container direction="row" justifyContent="flex-start">
                        <PersonOutlineOutlinedIcon className={classes.icon}></PersonOutlineOutlinedIcon>
                        <Titulo>Cadastro Pessoal</Titulo>
                    </Grid>
                </Box>
            </Container>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={12} sm={12} lg={6} >
                        <Informacoes>
                            <p>Preencha todos os campos! Nós não compartilharemos
                                nenhuma informação pessoal ou dado sensível seu
                                com ninguém.
                            </p>
                        </Informacoes>
                    </Grid>
                </Grid>
            </Box>
            <form>
                <Box mt={3}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} sm={12} lg={6} >
                            <TextField className={classes.campoEntrada} value = {pessoa.nome}  onChange={(e) => { pessoa.nome = e.target.value }}
                                id="outlined-basic" type="text" label="Nome" variant="outlined" />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={3}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} sm={12} lg={6} >
                            <TextField className={classes.campoEntrada} onChange={(e) => { pessoa.sobrenome = e.target.value }}
                                id="outlined-basic" type="text" label="Sobrenome" variant="outlined" />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={3}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} sm={12} lg={6} >
                            <TextField
                                id="date"
                                label="Data de Nascimento"
                                type="date"
                                variant="outlined"
                                onChange={(e) => { pessoa.nascimento = new Date(e.target.value) }}
                                className={classes.campoEntrada}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={3}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} sm={12} lg={6} >
                            <TextField className={classes.campoEntrada} id="outlined-basic" onChange={(e) => { pessoa.email = e.target.value }}
                                type="email" label="E-Mail" variant="outlined" />
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={3}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} sm={12} lg={6} >
                            <TextField className={classes.campoEntrada} id="outlined-basic" onChange={(e) => { pessoa.telefone = e.target.value }}
                                type="text" label="Telefone" variant="outlined" />
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={3}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} sm={12} lg={6} >
                            <TextField className={classes.campoEntrada} onChange={(e) => { pessoa.senha = e.target.value }}
                                id="outlined-basic" type="password" label="Senha" variant="outlined" />
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={12} sm={12} lg={6} >
                        <TextField className={classes.campoEntrada} onChange={(e) => { senhaConfirmacao = e.target.value }}
                            id="outlined-basic" type="password" label="Confirmar Senha" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>

            <Box mt={1}>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={12} sm={12} lg={6} >
                        <Button onClick={salvar}> Cadastrar</Button>
                    </Grid>
                </Grid>
            </Box>
        </CorpoCadastro>
    );

}
export default TelaCadastro;