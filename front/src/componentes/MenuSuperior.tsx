import { AppBar, Toolbar } from "@material-ui/core";
import styled from 'styled-components';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';




const MenuSuperior = (props) => {

    const Titulo = styled.h3`
    text-align: left;
    color: #F5F5F5;
    margin-left: 1em;
  `;

    const useStyles = makeStyles(theme => ({
        appbar: {
            

        },

    }));
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar} position="fixed">
                <Toolbar>
                    <PetsIcon></PetsIcon>
                    <Titulo>Pet Feliz</Titulo>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuSuperior;