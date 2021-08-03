import React from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, TextField, Select, InputLabel, MenuItem } from "@material-ui/core";
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import texturapet from '../imgs/texturapet.jpg';
import { Animal } from "../entidades/animal";
import Axios from 'axios';


var animal: Animal = new Animal();

function validacao() {
    if (!animal.nome) {
        console.log('nome invalido')
        return false;
    }
    if (!animal.descricao) {
        console.log('descricao invalido')
        return false;
    }
    if (!animal.contato) {
        console.log('email invalido')
        return false;
    }
    if (!animal.tipo) {
        console.log('nascimento invalido')
        return false;
    }
    if (!animal.idade) {
        console.log('sobrenome invalido')
        return false;
    }

    return true;
}

const TelaCadastroBichinho = (props) => {
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

    const FotoPerfil = styled.img`
    border: 1px solid #ddd;
    border-radius: 50%;
    padding: 5px;
    width: 150px;
    height: 150px;
    `


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
        },

        selecao: {
            width: '60%',
            marginTop: '24px',
        }

    }));

    const salvar = (e) => {
        e.preventDefault();
        animal.idPessoa = parseInt(localStorage.getItem('sessao.id'))
        if (validacao() === true) {
            Axios.post('http://localhost:3001/animal', {
                params: {
                    nome: animal.nome,
                    idade: animal.idade,
                    descricao: animal.descricao,
                    tipo: animal.tipo,
                    contato: animal.contato,
                    idPessoa: animal.idPessoa
                }
            })
                .then(function (response) {
                    if (response.data) {
                        console.log(response.data);
                        props.history.push('/home');
                    }
                });
        } else {
            console.log('falhou')
        }
    }

    const classes = useStyles();
    return (
        <CorpoCadastro>
            <Container maxWidth={false} className={classes.fullscreen}>
                <Box mt={10} ml={3} className={classes.boxDiv}>
                    <Grid container direction="row" justifyContent="flex-start">
                        <PetsOutlinedIcon className={classes.icon}></PetsOutlinedIcon>
                        <Titulo>Cadastro Bichinho</Titulo>
                    </Grid>
                </Box>
            </Container>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <TextField className={classes.campoEntrada} id="outlined-basic" onChange={(e) => { animal.nome = e.target.value }}
                            type="text" label="Nome" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <TextField className={classes.campoEntrada} id="outlined-basic" onChange={(e) => { animal.idade = parseInt(e.target.value)}}
                            type="number" label="Idade estimada em Meses" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <TextField className={classes.campoEntrada} id="outlined-basic" onChange={(e) => { animal.descricao = e.target.value }}
                            type="text" label="Descrição" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <InputLabel className={classes.selecao} id="demo-simple-select-label">Tipo de Animal</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => { animal.tipo = e.target.value + '' }}
                            value={animal.nome}
                            // onChange={handleChange}
                            className={classes.selecao}
                        >
                            <MenuItem value={null}>Selecione um tipo</MenuItem>
                            <MenuItem value={'Canino'}>Canino</MenuItem>
                            <MenuItem value={'Felino'}>Felino</MenuItem>
                            <MenuItem value={'Ave'}>Ave</MenuItem>
                            <MenuItem value={'Aquatico'}>Aquatico</MenuItem>
                            <MenuItem value={'Outros'}>Outros</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <TextField className={classes.campoEntrada}  onChange={(e) => { animal.contato = e.target.value }} id="outlined-basic" type="text" label="Contato" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>

            <Box mt={3}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <p>Foto do Bichinho</p>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <FotoPerfil src={texturapet} />
                    </Grid>
                </Grid>
                <Grid container direction="column" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <Button>Upload</Button>

                    </Grid>

                </Grid>
            </Box>

            <Box mt={1}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <Button onClick={salvar}>Cadastrar</Button>
                        <WarningButton >Limpar</WarningButton>
                    </Grid>
                </Grid>
            </Box>




        </CorpoCadastro>
    );

}
export default TelaCadastroBichinho;