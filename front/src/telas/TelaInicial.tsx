
import React from "react";

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from "@material-ui/core";
import DadosAnimais from "../componentes/DadosAnimais";
import ConteudoAnimais from "../componentes/ConteudoAnimais";

const CorpoHome = styled.div`
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


const InfoScreen = styled.div`
  background-color:#f9e7ff;
  border-radius: 48px
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
    }

}));



const TelaInicial = () => {
    var columns = [
        { 'id:': 0, 'nome': 'Nome', 'tipo': 'Tipo', 'tamanho': 'Tamanho' },
        { 'id:': 1, 'nome': 'Nome', 'tipo': 'Tipo', 'tamanho': 'Tamanho' },
        { 'id:': 2, 'nome': 'Nome', 'tipo': 'Tipo', 'tamanho': 'Tamanho' },
        { 'id:': 3, 'nome': 'Nome', 'tipo': 'Tipo', 'tamanho': 'Tamanho' },
    ];

    const classes = useStyles();
    return (
        <div>
            <CorpoHome maxWidth={false} className={classes.fullscreen}>
                <Box mt={10} ml={3} mr={3} className={classes.boxDiv}>
                    <Grid container direction="row" justifyContent="flex-start">
                        <Titulo>Conheça nossos bichinhos!</Titulo>
                    </Grid>
                    <Grid container direction="row" justifyContent="flex-start">
                        <Grid item direction="column" lg={6} xs={12} >
                            <InfoScreen>
                                <ConteudoAnimais />
                            </InfoScreen>
                        </Grid>
                        <Grid item direction="column" lg={6} xs={12}>
                            <DadosAnimais campos={columns} />
                        </Grid>
                    </Grid>

                </Box>
            </CorpoHome>
        </div>


    );

}

export default TelaInicial;