import { AppBar, Toolbar, Link, Grid, Box, Button } from "@material-ui/core";
import styled from 'styled-components';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';


const MenuSuperior = (props) => {

    const Titulo = styled.h3`
    text-align: left;
    margin-left: 1em;
  `;


    const LinkMenu = styled.a`
    text-align: left;
    color: #F5F5F5;
    margin-left: 1em;
    text-decoration: none;
    transition: 0.3s;
    display:flex;
    &:hover {
        color:#ffcfe0 !important;
        transition: 0.3s;
    }
  `;

    const useStyles = makeStyles(theme => ({
        appbar: {


        },
        icon: {
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '24px',
            height: '24px',
            marginLeft: '12px'
        },

    }));
    const classes = useStyles();

    const sair = (e) => {
        e.preventDefault();
        localStorage.setItem('sessao.nome', 'nenhum');
        localStorage.setItem('sessao.id', '-1');
        props.history.push('/');
    }

    const Mensagem = () => {
        var sessao = localStorage.getItem('sessao.nome');
        if (sessao !== 'nenhum') {
            return (
                <div>
                    <Box justifyContent="flex-end">
                        <Grid container direction="row">
                            <Box ml={3} my={'auto'}>
                                <h3>Olá, {localStorage.getItem('sessao.nome')}!</h3>
                            </Box>
                            <Box my={'auto'}><LinkMenu href="/home"><Titulo>Tela Inicial</Titulo></LinkMenu></Box>
                            <Box my={'auto'}><LinkMenu href="/cadastrobichinho"><Titulo>Cadastrar Bichinho</Titulo></LinkMenu></Box>
                            <Box ml={3}> <Button onClick={sair}><h3>Sair</h3></Button> </Box>
                        </Grid>
                    </Box>
                </div>
            )
        } else {
            return (
                <div>
                    <Box ml={3}>
                        <LinkMenu href="/cadastro"><Titulo>Cadastre-se!</Titulo></LinkMenu>
                    </Box>
                </div>
            )
        }

    }

    return (
        <div>
            <AppBar className={classes.appbar} position="fixed">
                <Toolbar>
                    <LinkMenu href="/"><PetsIcon className={classes.icon}></PetsIcon><Titulo>Pet Feliz</Titulo></LinkMenu>
                    <Mensagem></Mensagem>
                </Toolbar>
            </AppBar>

        </div>
    );
}



export default withRouter(MenuSuperior);