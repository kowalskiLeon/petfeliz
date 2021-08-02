import './App.css';
import MenuSuperior from './componentes/MenuSuperior';
import TelaLogin from './telas/TelaLogin';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TelaCadastro from './telas/TelaCadastro';
import TelaCadastroBichinho from './telas/TelaCadastroBichinho';
import TelaInicial from './telas/TelaInicial';
import { Pessoa } from './entidades/pessoa';
import { useState } from 'react';
import Axios from 'axios';



function App() {

    const [usuario, setUsuario] = useState(new Pessoa());

    const mudarUsuario = (p: Pessoa) => {
        setUsuario(p);
        localStorage.setItem('sessao', p.id + '');
    }

    if (localStorage.getItem('sessao') != 'nenhum') {
        Axios.get('http://localhost:3001/pessoa/' + localStorage.getItem('sessao'), {
        })
            .then(function (response) {
                if (response.data) {
                    var p = new Pessoa(response.data.id, response.data.nome, response.data.sobrenome);
                    mudarUsuario(p);
                }
            })
    }


    return (
        <div className="App">
            <BrowserRouter>
                <MenuSuperior usuario={usuario} />
                <Switch>
                    <Route path="/" exact={true} component={(props) => <TelaLogin {...props} usuario={usuario} mudarUsuario={mudarUsuario} />} />
                    <Route path="/home" exact={true} component={TelaInicial} />
                    <Route path="/cadastro" exact={true} component={TelaCadastro} />
                    <Route path="/cadastrobichinho" exact={true} component={TelaCadastroBichinho} />
                </Switch>
            </ BrowserRouter>
        </div >
    );
}

export default App;