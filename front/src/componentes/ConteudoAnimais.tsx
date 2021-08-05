
import React, { useEffect, useState } from "react";

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid } from "@material-ui/core";
import texturapet from '../imgs/texturapet.jpg';
import DadosAnimais from "./DadosAnimais";
import Axios from 'axios';
import { Animal } from "../entidades/animal";
import { Buffer } from "buffer";


const ConteudoAnimais = (props) => {

    const mudarLista = (p: Animal[]) => {
        setListaAnimais(p);
    }

    const [listaAnimais, setListaAnimais] = useState(new Array());
    useEffect(() => {
        mudarLista([]);
        Axios.get('http://localhost:3001/animal', {
        })
            .then(function (response) {
                if (response.data) {
                    mudarLista(response.data);
                    console.log(response.data);
                }
            });
    }, []);

    const buffToB64 = (entrada) =>{
        const buffer = Buffer.from(entrada);
        return buffer;
    }


    const FotoPerfil = styled.img`
    border: 1px solid #ddd;
    padding: 5px;
    width: 360px;
    height: 360px;
    margin-left: auto;
    `

    const MiniFoto = styled.img`
    border: 1px solid #ddd;
    padding: 5px;
    width: 100px;
    height: 100px;
    margin-left: auto;
    `

    const Paragrafo = styled.p`
    border: 1px solid #ddd;
    padding: 5px;
    width: 480px;
    margin-right: auto;
    margin-left: auto;
    text-align: justify;
    text-justify: inter-word;
    `

    return (
        <div>
            {props.animal.id ?
                <Box mb={10}>
                    <Grid container direction="row" justifyContent="center">
                        <Box><h2>{props.animal.nome}</h2></Box>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Box><h3>{props.animal.tipo}</h3></Box>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Box>
                            <FotoPerfil src={buffToB64(props.animal.imagem)} />
                        </Box>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Box>
                            <h3>Idade: {props.animal.idade} meses</h3>
                        </Box>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Box>
                            <Paragrafo>
                                {props.animal.descricao}
                            </Paragrafo>
                        </Box>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Box><h2>Contato: {props.animal.contato}</h2></Box>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Button onClick={() => {
                            props.mudarAnimal(new Animal())
                        }}>Voltar</Button>
                    </Grid>
                </Box>

                : <Box p={6} justifyContent="center" className='text-center'>
                    <h2>Selecione um bichinho da lista para ver seus dados.</h2>
                    {listaAnimais.map(
                        campo => {
                            return (

                                <Button key={campo.id} onClick={() => {
                                    props.mudarAnimal(campo)
                                }}>
                                    <Box mx={6} mt={3}>
                                        <Grid container direction="column" justifyContent="center">
                                            <MiniFoto src={buffToB64(campo.imagem)} />
                                            {campo.nome}
                                        </Grid>
                                    </Box>
                                </Button>
                            );
                        }
                    )}
                </Box>}
        </div>
    );

}

export default ConteudoAnimais;