import React from "react";

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Select, InputLabel, MenuItem, TextField } from "@material-ui/core";
import texturapet from '../imgs/texturapet.jpg';

const DadosAnimais = (props) => {

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
            <Box  ml={5} mr={5}>
                <CampoBusca>
                    <Grid container direction="row" justifyContent="center">
                        <Box my={3} mx={5} width='100%'>
                            <Grid container direction="row" justifyContent="center" >
                                    <TextField className={classes.campoEntrada} id="outlined-basic" type="text" label="Nome" variant="outlined" />
                            </Grid>
                            <Grid container direction="row" justifyContent="center">
                                    <InputLabel className={classes.selecao} id="demo-simple-select-label">Tipo de Animal</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
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
                        </Box>
                    </Grid>
                </CampoBusca>
            </Box>
            <Box ml={5} mr={5}>
                <Tabela>
                    <thead>
                        <th>
                            Nome
                        </th>
                        <th>
                            Tipo
                        </th>
                        <th>
                            Tamanho
                        </th>
                        <th>
                            Informações
                        </th>
                    </thead>
                    <tbody>
                        {props.campos.map(
                            campo => {
                                console.log(campo);
                                return (
                                    <Linha key={campo.id}>
                                        <td>{campo.nome}</td>
                                        <td>{campo.tipo}</td>
                                        <td>{campo.tamanho}</td>
                                        <td><BotaoVerMais>Ver mais</BotaoVerMais></td>
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