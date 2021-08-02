
import React from "react";

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid } from "@material-ui/core";
import texturapet from '../imgs/texturapet.jpg';
import DadosAnimais from "./DadosAnimais";


const ConteudoAnimais = () => {

    const FotoPerfil = styled.img`
    border: 1px solid #ddd;
    padding: 5px;
    width: 360px;
    height: 360px;
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
            <Box mb={10}>
                <Grid container direction="row" justifyContent="center">
                    <Box><h2>Nome</h2></Box>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Box><h3>Tipo</h3></Box>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Box>
                        <FotoPerfil src={texturapet} />
                    </Box>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Box>
                        <Paragrafo>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </Paragrafo>
                    </Box>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Box><h2>Contato: 31 96245104</h2></Box>
                </Grid>
            </Box>
        </div>
    );

}

export default ConteudoAnimais;