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
        localStorage.setItem('sessao', 'nenhum');
        props.history.push('/login');
    }

    const mensagem = () => {
        var sessao = localStorage.getItem('sessao');
        if(sessao != 'nenhum'){
            return (
                <div>
                    <Box ml={3}>
                        <h3>Olá, {props.usuario.nome}!</h3>
                    </Box>
                    <Box ml={3}> <Button onClick={sair}><h3>Sair</h3></Button> </Box>
                </div>
            )
        }else{
            return(
                <div>
                    <Box>
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
                    <LinkMenu href="/home"><PetsIcon className={classes.icon}></PetsIcon><Titulo>Pet Feliz</Titulo></LinkMenu>
                    {mensagem}
                </Toolbar>
            </AppBar>

        </div>
    );
}



export default withRouter(MenuSuperior);