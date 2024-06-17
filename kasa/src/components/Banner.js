import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    );
};

export default Banner;