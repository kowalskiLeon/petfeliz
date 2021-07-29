import React from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, Container, Grid, TextField } from "@material-ui/core";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';


const TelaCadastroBichinho = () => {
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
    width: 60%
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
                        <TextField className={classes.campoEntrada} id="outlined-basic" type="text" label="Nome" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <TextField className={classes.campoEntrada} id="outlined-basic" type="number" label="Idade estimada em Meses" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={3}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <TextField className={classes.campoEntrada} id="outlined-basic" type="text" label="Descrição" variant="outlined" />
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
                        <img src=''/>
                    </Grid>
                </Grid>
                <Grid container direction="column" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <TextField className={classes.campoEntrada} id="outlined-basic" type="text" label="Descrição" />

                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} >
                        <Button>Upload</Button>

                    </Grid>

                </Grid>
            </Box>

            <Box mt={1}>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={12} sm={12} lg={6} >
                        <Button>Cadastrar</Button>
                        <WarningButton>Limpar</WarningButton>
                    </Grid>
                </Grid>
            </Box>




        </CorpoCadastro>
    );

}
export default TelaCadastroBichinho;