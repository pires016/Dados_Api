import React from 'react';
import { Link } from 'react-router-dom';

const GlobalMenu = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/estatisticas"> Estatísticas do Covid-19 </Link>
        </nav>
    );
}

export default GlobalMenu;