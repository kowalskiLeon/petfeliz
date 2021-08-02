import { AppBar, Toolbar, Link, Grid } from "@material-ui/core";
import styled from 'styled-components';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



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


    return (
        <div>
            <AppBar className={classes.appbar} position="fixed">
                <Toolbar>
                    <LinkMenu href="/home"><PetsIcon className={classes.icon}></PetsIcon><Titulo>Pet Feliz</Titulo></LinkMenu>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}



export default MenuSuperior;