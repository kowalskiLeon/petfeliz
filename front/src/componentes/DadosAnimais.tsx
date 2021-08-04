import React, { useEffect, useState } from "react";

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Select, InputLabel, MenuItem, TextField } from "@material-ui/core";
import texturapet from '../imgs/texturapet.jpg';
import Axios from 'axios';
import { Animal } from "../entidades/animal";

var nome: string;
var tipo: string;
var idade: number;

const DadosAnimais = (props) => {

    const [listaAnimais, setListaAnimais] = useState(new Array());


    const mudarLista = (p: Animal[]) => {
        setListaAnimais(p);
    }

    useEffect(() => {
        mudarLista([]);
        Axios.get('http://localhost:3001/animal', {
        })
            .then(function (response) {
                if (response.data) {
                    mudarLista(response.data);
                    console.log(listaAnimais);
                }
            });
    }, []);

    const pesquisar = (e) => {
        e.preventDefault();
        var request = 'pesquisa';
        console.log(nome, tipo, idade)
        if(nome==='' && tipo === '' && idade == 0) request = 'animal';
        mudarLista([]);
        Axios.get('http://localhost:3001/'+ request, {
            params: {
                nomeAnimal: nome,
                idadeAnimal: idade,
                tipoAnimal: tipo
            }
        })
            .then(function (response) {
                if (response.data) {
                    mudarLista(response.data);
                    console.log(listaAnimais);
                }
            });
    };


    const Linha = styled.tr`
        text-align: center;
        
      `;

    const Tabela = styled.table`
        text-align: center;
        border: 1px solid white;
        background-image: linear-gradient(to bottom right, #e9d4f4, #f2e2ff);
        border-radius: 20px;
        width:100%;
        padding: 12px;
      `;

    const CampoBusca = styled.div`
        text-align: center;
        border: 1px solid white;
        background-image: linear-gradient(to bottom right, #e9d4f4, #f2e2ff);
        border-radius: 20px;
        width:100%;
        padding: 12px;
      `;


    const BotaoVerMais = styled.button`
        text-align: left;
        margin: auto;
        border:unset;
        padding: 12px;
        border-radius: 10px;
        background-color: #e9a9ff;
        &:hover {
            background-color:#9874a5;
            color:white;
            transition: 0.3s;
        }
      `;


    const useStyles = makeStyles(theme => ({
        selecao: {
            width: '100%'
        },
        campoEntrada: {
            width: '100%'
        }

    }));
    const classes = useStyles();
    return (
        <div>
            <Box mx={5}>
                <CampoBusca>
                    <Grid container direction="row" justifyContent="center">
                        <Box my={3} mx={5} width='100%'>
                            <Grid container direction="row" justifyContent="center" >
                                <TextField className={classes.campoEntrada} value = {nome} onChange={(e) => { nome = e.target.value}}
                                id="outlined-basic" type="text" label="Nome" variant="outlined" />
                            </Grid>
                            <Grid container direction="row" justifyContent="center">
                                <Box mt={4} width='90%'>
                                    <InputLabel className={classes.selecao} id="demo-simple-select-label">Tipo de Animal</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={(e) => tipo = e.target.value+''}
                                        value={tipo}
                                        // onChange={handleChange}
                                        className={classes.selecao}
                                    >
                                        <MenuItem value={'Nenhum'}>Selecione um tipo</MenuItem>
                                        <MenuItem value={'Canino'}>Canino</MenuItem>
                                        <MenuItem value={'Felino'}>Felino</MenuItem>
                                        <MenuItem value={'Ave'}>Ave</MenuItem>
                                        <MenuItem value={'Aquatico'}>Aquatico</MenuItem>
                                        <MenuItem value={'Outros'}>Outros</MenuItem>
                                    </Select>
                                </Box>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" >
                                <Box mt={3}>
                                    <TextField className={classes.campoEntrada} id="outlined-basic" onChange={(e) => {idade = (parseInt(e.target.value))}}
                                    type="number" label="Idade" variant="outlined" />
                                </Box>
                            </Grid>
                            <Grid>
                                <Box mt={4}>
                                    <Button onClick={pesquisar}>Pesquisar</Button>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </CampoBusca>
            </Box>
            <Box my={3} mx={5} >
                <Tabela>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Idade</th>
                            <th>Informações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaAnimais.map(
                            campo => {
                                return (
                                    <Linha key={campo.id}>
                                        <td>{campo.nome}</td>
                                        <td>{campo.tipo}</td>
                                        <td>{campo.idade}</td>
                                        <td><BotaoVerMais onClick={() => {
                                            props.mudarAnimal(campo);
                                        }}>Ver mais</BotaoVerMais></td>
                                    </Linha>
                                );
                            }
                        )}
                    </tbody>
                </Tabela>
            </Box>
        </div>
    );
}

export default DadosAnimais;