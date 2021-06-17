import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Estatisticas from './pages/Estatisticas';

export default class App extends React.Component {
    dummy = () => {
        // Just to test arrow functions
    }

    render() {
        return (    
            <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/estatisticas" component={Estatisticas}/>
            </Switch>
        </HashRouter>
        );
    }
}
