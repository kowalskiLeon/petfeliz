import './App.css';
import MenuSuperior from './componentes/MenuSuperior';
import TelaLogin from './telas/TelaLogin';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TelaCadastro from './telas/TelaCadastro';
import TelaCadastroBichinho from './telas/TelaCadastroBichinho';


function App() {
    return (
        <div className="App">
            <MenuSuperior />
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact={true} component={TelaLogin} />
                    <Route path="/cadastro" exact={true} component={TelaCadastro} />
                    <Route path="/cadastrobichinho" exact={true} component={TelaCadastroBichinho} />
                </Switch>
            </ BrowserRouter>
        </div >
    );
}

export default App;