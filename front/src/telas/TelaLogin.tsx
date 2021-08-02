import { Box, Card, Container, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Pessoa } from '../entidades/pessoa';

var email = '';
var senha = '';

const TelaLogin = (props) => {

    const Titulo = styled.h1`
    font-size: 2em;
    text-align: center;
    color: #9ea3cc;
  `;

    const CallToAction = styled.h3`
    font-size: 1.6em;
    text-align: center;
    color: #2f2f2f;
  `;

    const Button = styled.button`
    margin-top: 2em;
    margin-bottom: 2em;
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

    const ButtonCadastro = styled.button`
    font-size: 1em;
    width: 16em;
    height: 4em;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color:#6788e1;
    color: white;
    padding: 0.6em;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background-color:#cb6eff;
        transition: 0.3s;
        color:#fff4c4;
    }
    
  `;

    const CorpoDoLogin = styled.div`
    width:100%;
    background-color: #f3fcff!important;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom right, #e9d4f4, #f2e2ff);
    height: 100%;
  `;

    const EsqueciMinhaSenha = styled.a`
    padding: 2em;
    color: #9e95ff;
    transition: 0.3s;
    text-decoration: none;
    &:hover {
        color: #581bf2;
        transition: 0.3s;
    }
  `;


    const FormularioLogin = styled.form`
        text-align: center;
  `;

    const useStyles = makeStyles(theme => ({
        bigGrid: {
            height: '60vh',
            verticalAlign: 'middle'

        },
        cartao: {
            width: '60vw',
            verticalAlign: 'middle',
            marginLeft: 'auto',
            marginRight: 'auto'
        },

        campos: {
            marginTop: '1em',
            textAlign: 'center',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'

        },

        centro: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },

        forms: {
            textAlign: 'center'
        },

        link: {
            textDecoration: 'none',
            color: 'white'
        }

    }));

    const login = (e) => {
        e.preventDefault();
        Axios.get('http://localhost:3001/login', {
            params: {
                email: email,
                senha: senha
            }
        })
            .then(function (response) {
                console.log(props)
                if (response.data) {
                    props.mudarUsuario(new Pessoa(response.data.id, response.data.nome, response.data.sobrenome));
                    props.history.push('/home');
                }
            })
            ;
    }

    const classes = useStyles();
    return (
        <CorpoDoLogin>
            <Container>
                <Box width="100%" display="flex" mx="auto" mt={15} justifyContent="center">
                    <Grid container justifyContent="center">
                        <Grid item className={classes.bigGrid} xs={12} sm={12} >
                            <Card className={classes.cartao}>
                                <Box justifyContent="center" mt={5} alignItems="center" textAlign="center" >
                                    <Titulo>Boas vindas!</Titulo>
                                </Box>

                                <FormularioLogin>
                                    <Box justifyContent="center" mx='auto' width='100%' alignItems="center" textAlign="center" >
                                        <Grid item xs={10} sm={10} lg={6} className={classes.centro}>
                                            <TextField className={classes.campos} onChange={(e) => { email = e.target.value }} id="outlined-basic" type="email" label="E-Mail" variant="outlined" />
                                        </Grid>
                                    </Box>

                                    <Box justifyContent="center" alignItems="center" textAlign="center" >
                                        <Grid item xs={10} sm={10} lg={6} className={classes.centro}>
                                            <TextField className={classes.campos} onChange={(e) => { senha = e.target.value }} id="outlined-password-input" variant="outlined" label="Senha" type="password" autoComplete="current-password" />
                                        </Grid>
                                    </Box>
                                    <Box justifyContent="center" alignItems="center" textAlign="center" >
                                        <Button onClick={login}>Entrar</Button>
                                    </Box>
                                    <Box mb={3} justifyContent="flex-end" alignItems="flex-end" textAlign="end">
                                        <EsqueciMinhaSenha href="#">Esqueci minha senha</EsqueciMinhaSenha>
                                    </Box>
                                </FormularioLogin>
                            </Card>
                            <Grid container direction="row">
                                <Box mt={3} mx='auto' justifyContent="center" alignItems="center" textAlign="center">
                                    <CallToAction>Ainda não sou cadastrado na plataforma!</CallToAction>
                                </Box>
                            </Grid>
                            <Grid container direction="row" justifyContent="center">
                                <Box mt={3} justifyContent="center" alignItems="center" textAlign="center">
                                    <ButtonCadastro><Link className={classes.link} to="/cadastro">Quero me Cadastrar</Link></ButtonCadastro>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </CorpoDoLogin>

    )
}

export default TelaLogin;